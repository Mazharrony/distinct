import { z } from "zod";

/**
 * Shared enquiry types and validation.
 *
 * These live outside the "use server" module because a server-action file may
 * only export async functions — exporting the schema or initial state from
 * there is a build error.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number we can reach you on.")
    .max(30, "That number is too long.")
    .regex(/^[+\d][\d\s()-]*$/, "Please enter a valid phone number."),
  email: z
    .union([
      z.string().trim().email("Please enter a valid email address."),
      z.literal(""),
    ])
    .optional(),
  service: z.string().trim().max(80).optional(),
  propertyType: z.string().trim().max(40).optional(),
  message: z
    .string()
    .trim()
    .max(2000, "Please keep your message under 2000 characters.")
    .optional(),
  // Bot traps — never shown to real users.
  company: z.string().max(0, "").optional(),
  renderedAt: z.string().optional(),
});

export type EnquiryFields = z.infer<typeof enquirySchema>;

export type EnquiryState = {
  status: "idle" | "success" | "error" | "unavailable";
  message?: string;
  errors?: Partial<Record<keyof EnquiryFields, string>>;
  values?: Record<string, string>;
};

export const initialEnquiryState: EnquiryState = { status: "idle" };
