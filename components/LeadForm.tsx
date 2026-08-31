"use client";

import { useState } from "react";
import { track } from "../lib/analytics";
import { locations } from "../lib/data/locations";
import { site, whatsappHref } from "../lib/site";

const needs = [
  "Water leakage",
  "Dampness",
  "Seepage",
  "Bathroom leakage",
  "Underground leakage",
  "Property inspection",
  "Construction inspection",
  "Other",
];

const propertyTypes = [
  "Apartment",
  "Independent house",
  "Villa",
  "Office",
  "Commercial",
  "Society",
  "Industrial",
  "Other",
];

const empty = {
  need: "",
  propertyType: "",
  location: "",
  description: "",
  name: "",
  phone: "",
  email: "",
};

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1);
  const [started, setStarted] = useState(false);
  const [form, setForm] = useState(empty);
  const [done, setDone] = useState(false);

  function start() {
    if (!started) {
      track("form_started");
      setStarted(true);
    }
  }

  function update(key: keyof typeof empty, value: string) {
    start();
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    track("form_submitted", { need: form.need, city: form.location });
    setDone(true);
  }

  const message = [
    `Inspection request — ${site.name}`,
    `Need: ${form.need}`,
    `Property: ${form.propertyType}`,
    `Location: ${form.location}`,
    `Notes: ${form.description}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
  ].join("\n");

  if (done) {
    return (
      <div className="rounded-sm border border-line bg-white p-6">
        <p className="serif text-2xl">Request captured</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          This site is static, so the last step opens WhatsApp with your details
          prefilled. If that does not launch, email {site.email}.
        </p>
        <a
          href={whatsappHref(message)}
          onClick={() => track("whatsapp_click", { source: "form_complete" })}
          className="mt-6 inline-flex bg-forest px-5 py-3 text-sm font-medium text-paper"
        >
          Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      id="book"
      onSubmit={submit}
      className={`rounded-sm border border-line bg-white ${compact ? "p-5" : "p-6 md:p-8"}`}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-muted">
        Step {step} of 5
      </p>
      <div className="mt-3 h-1 w-full bg-line">
        <div className="h-1 bg-forest" style={{ width: `${(step / 5) * 100}%` }} />
      </div>

      {step === 1 ? (
        <fieldset className="mt-6">
          <legend className="serif text-2xl">What do you need help with?</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {needs.map((need) => (
              <label
                key={need}
                className={`cursor-pointer border px-3 py-3 text-sm ${form.need === need ? "border-forest bg-[#e8f0ec]" : "border-line"}`}
              >
                <input
                  type="radio"
                  name="need"
                  className="sr-only"
                  checked={form.need === need}
                  onChange={() => update("need", need)}
                />
                {need}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="mt-6">
          <legend className="serif text-2xl">Property type</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <label
                key={type}
                className={`cursor-pointer border px-3 py-3 text-sm ${form.propertyType === type ? "border-forest bg-[#e8f0ec]" : "border-line"}`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  className="sr-only"
                  checked={form.propertyType === type}
                  onChange={() => update("propertyType", type)}
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <label className="mt-6 grid gap-2">
          <span className="serif text-2xl">Location</span>
          <input
            required
            list="city-list"
            value={form.location}
            onChange={(event) => update("location", event.target.value)}
            placeholder="City or locality"
            className="h-12 border border-line bg-paper px-3"
          />
          <datalist id="city-list">
            {locations.map((location) => (
              <option key={location.slug} value={location.city} />
            ))}
          </datalist>
        </label>
      ) : null}

      {step === 4 ? (
        <label className="mt-6 grid gap-2">
          <span className="serif text-2xl">What are you seeing?</span>
          <textarea
            rows={5}
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
            placeholder="Ceiling stain after showers, wet wall, unexplained tank drop…"
            className="border border-line bg-paper px-3 py-3"
          />
        </label>
      ) : null}

      {step === 5 ? (
        <div className="mt-6 grid gap-3">
          <p className="serif text-2xl">How should we reach you?</p>
          <input
            required
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="h-12 border border-line bg-paper px-3"
          />
          <input
            required
            name="phone"
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="h-12 border border-line bg-paper px-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="h-12 border border-line bg-paper px-3"
          />
        </div>
      ) : null}

      <div className="mt-8 flex gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((value) => value - 1)}
            className="h-11 px-4 text-sm"
          >
            Back
          </button>
        ) : null}
        {step < 5 ? (
          <button
            type="button"
            onClick={() => {
              if (step === 1 && !form.need) return;
              if (step === 2 && !form.propertyType) return;
              if (step === 3 && !form.location) return;
              start();
              setStep((value) => value + 1);
            }}
            className="h-11 bg-copper px-5 text-sm font-medium text-white hover:bg-copper-2"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="h-11 bg-copper px-5 text-sm font-medium text-white hover:bg-copper-2"
          >
            Request inspection
          </button>
        )}
      </div>
    </form>
  );
}
