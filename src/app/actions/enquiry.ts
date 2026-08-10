"use server";

import {
  enquirySchema,
  type EnquiryFields,
  type EnquiryState,
} from "@/lib/enquiry";
import { services } from "@/content/services";
import { site } from "@/content/site";

const serviceNames = services.map((service) => service.name);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;
  const parsed = enquirySchema.safeParse(raw);

  // Keep what the visitor typed so a validation error never clears the form.
  const values = {
    name: raw.name ?? "",
    phone: raw.phone ?? "",
    email: raw.email ?? "",
    service: raw.service ?? "",
    propertyType: raw.propertyType ?? "",
    message: raw.message ?? "",
  };

  if (!parsed.success) {
    const errors: EnquiryState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof EnquiryFields;
      errors[field] ??= issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors,
      values,
    };
  }

  const data = parsed.data;

  // Honeypot filled, or submitted implausibly fast — drop it silently so bots
  // get no signal, and show the visitor the normal success state.
  const elapsed = data.renderedAt
    ? Date.now() - Number(data.renderedAt)
    : Number.POSITIVE_INFINITY;
  if (data.company || elapsed < 2500) {
    return {
      status: "success",
      message: "Thank you — we will be in touch shortly.",
    };
  }

  const serviceLabel =
    data.service && serviceNames.includes(data.service)
      ? data.service
      : data.service || "Not specified";

  const lines = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "Not provided"],
    ["Service", serviceLabel],
    ["Property type", data.propertyType || "Not specified"],
    ["Message", data.message || "—"],
  ] as const;

  const apiKey = process.env.RESEND_API_KEY;

  // Not configured yet — record it and point the visitor at the channels that
  // do work, rather than showing a broken form.
  if (!apiKey) {
    console.info(
      "[enquiry] RESEND_API_KEY is not set. Enquiry received:\n" +
        lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
    );
    return {
      status: "unavailable",
      message: `Our enquiry form is not connected yet. Please call ${site.phone.display} or message us on WhatsApp and we will help straight away.`,
      values,
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "enquiries@distinct-solutions.ae",
      to: process.env.ENQUIRY_TO_EMAIL ?? site.email,
      replyTo: data.email || undefined,
      subject: `Website enquiry — ${serviceLabel} — ${data.name}`,
      text: lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2>New website enquiry</h2><table cellpadding="6">${lines
        .map(
          ([label, value]) =>
            `<tr><td><strong>${label}</strong></td><td>${escapeHtml(
              String(value),
            ).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}</table>`,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[enquiry] Failed to send:", error);
    return {
      status: "error",
      message: `Sorry — we could not send your enquiry just now. Please call ${site.phone.display} or message us on WhatsApp.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thank you — we will be in touch shortly.",
  };
}
