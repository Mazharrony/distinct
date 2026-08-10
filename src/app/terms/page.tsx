import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions covering the use of the Distinct Solutions & Technical Services website, our quotations, works and new customer offer.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms covering the use of this website, our quotations and the works we carry out."
      updated="10 August 2026"
      crumbLabel="Terms & Conditions"
      crumbHref="/terms"
      sections={[
        {
          heading: "About these terms",
          body: [
            `These terms apply to the use of this website and to enquiries made through it. ${site.name} operates in ${site.location.display}.`,
          ],
        },
        {
          heading: "Website content",
          body: [
            "The information on this website is provided for general guidance. Service descriptions indicate the type of work we undertake and do not form a quotation or a contract.",
            "Photographs of completed work are illustrative of the standard and type of work we carry out.",
          ],
        },
        {
          heading: "Quotations",
          body: [
            "Quotations are provided following an assessment of the requirement and, where necessary, a site visit. A quotation sets out the proposed works and costs and is valid for the period stated on it.",
            "Where works reveal conditions that could not reasonably have been identified at the time of quoting, we will discuss any variation with you and agree it before proceeding.",
          ],
        },
        {
          heading: "Works and workmanship",
          body: [
            "We carry out works with care and to a professional standard, and we stand behind the quality of our workmanship.",
            "Our workmanship guarantee covers the labour element of the works we carry out. Manufacturer warranties apply to supplied products and materials in accordance with the manufacturer's terms.",
            "The guarantee does not cover damage caused by misuse, alteration by others, lack of maintenance, or issues arising from pre-existing conditions outside the scope of the works.",
          ],
        },
        {
          heading: "New customer offer",
          body: [
            "The 10% off labour offer is available to new customers only, on their first booked service or project. It applies to labour costs and does not apply to materials, products or third-party charges.",
            "The offer must be mentioned when requesting a quotation, cannot be applied retrospectively, and cannot be combined with any other offer. We reserve the right to amend or withdraw the offer at any time.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "Payment terms are set out in your quotation. Larger projects may be staged, with payments falling due at agreed points in the programme.",
          ],
        },
        {
          heading: "Cancellation",
          body: [
            "If you need to cancel or reschedule a booked appointment, please give us as much notice as possible. Where materials have been ordered or works have commenced, costs already incurred may be payable.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `For any questions about these terms, please email ${site.email} or call ${site.phone.display}.`,
          ],
        },
      ]}
    />
  );
}
