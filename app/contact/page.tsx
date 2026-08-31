import type { Metadata } from "next";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import { site, telHref, whatsappHref } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a water leakage or property inspection. Call, WhatsApp, or send a five-step request.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Book an inspection or ask a scoping question."
        body="Use the form for a structured request. Call or WhatsApp if the issue is active and you need a same-week window."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <div id="consultation" className="border border-line bg-white p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Direct</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Phone · <a href={telHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                Email · <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                WhatsApp ·{" "}
                <a href={whatsappHref()} className="text-forest">
                  Start a chat
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-muted">
              Same-week windows depend on city and access. Tell us if the leak is
              active so we can prioritise the visit.
            </p>
          </div>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}
