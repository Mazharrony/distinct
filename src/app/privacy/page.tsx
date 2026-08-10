import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Distinct Solutions & Technical Services collects, uses and protects the personal information you provide through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use and protect the information you share with us."
      updated="10 August 2026"
      crumbLabel="Privacy Policy"
      crumbHref="/privacy"
      sections={[
        {
          heading: "Who we are",
          body: [
            `${site.name} is a property maintenance, technical services, renovation and fit-out company operating in ${site.location.display}. This policy explains how we handle personal information collected through this website.`,
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "When you submit an enquiry through our contact form, we collect the details you provide: your name, phone number, and optionally your email address, the service you are interested in, your property type and your message.",
            "We do not ask for payment details, identification documents or any other sensitive personal information through this website.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use the information you provide solely to respond to your enquiry, prepare a quotation, arrange a site visit where required, and carry out any works you subsequently instruct.",
            "We do not sell, rent or trade your personal information, and we do not use it for marketing unless you have specifically asked us to contact you about future offers.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "Where a project requires specialist trades or partners, we may share the details necessary for them to carry out the works. We share only what is needed for that purpose.",
            "We may also share information where we are required to do so by law.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep enquiry records for as long as needed to respond to you and to fulfil our obligations in relation to any works carried out, including any warranty or workmanship guarantee period.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "This website does not set advertising or tracking cookies. Any cookies used are strictly necessary for the website to function.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You can ask us to provide a copy of the information we hold about you, correct it if it is inaccurate, or delete it where we are not required to keep it. Contact us at ${site.email} or call ${site.phone.display}.`,
          ],
        },
        {
          heading: "Contact",
          body: [
            `If you have any questions about this policy, please email ${site.email} or call ${site.phone.display}.`,
          ],
        },
      ]}
    />
  );
}
