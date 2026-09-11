"use client";

import { useState } from "react";
import { track } from "../lib/analytics";
import { locations } from "../lib/data/locations";
import {
  inspectionPackages,
  site,
  upiPayHref,
  whatsappHref,
} from "../lib/site";
import PhotoCapture from "./PhotoCapture";

const TOTAL_STEPS = 6;

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
  name: "",
  phone: "",
  email: "",
  packageId: inspectionPackages[0].id,
  utr: "",
  paid: false,
};

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1);
  const [started, setStarted] = useState(false);
  const [form, setForm] = useState(empty);
  const [photos, setPhotos] = useState<File[]>([]);
  const [done, setDone] = useState(false);

  const selectedPackage =
    inspectionPackages.find((item) => item.id === form.packageId) ??
    inspectionPackages[0];

  function start() {
    if (!started) {
      track("form_started");
      setStarted(true);
    }
  }

  function update(key: keyof typeof empty, value: string | boolean) {
    start();
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    track("form_submitted", {
      need: form.need,
      city: form.location,
      package: selectedPackage.id,
      photos: photos.length,
      paid: form.paid,
    });
    setDone(true);
  }

  const message = [
    `Inspection request — ${site.name}`,
    `Need: ${form.need}`,
    `Property: ${form.propertyType}`,
    `Location: ${form.location}`,
    `Photos on this phone: ${photos.length}`,
    `Package: ${selectedPackage.name} · ₹${selectedPackage.amount}`,
    `Payment: ${form.paid ? `UPI done${form.utr ? ` · UTR ${form.utr}` : ""}` : "not marked paid yet"}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    photos.length
      ? "I will attach the inspection photos in this chat."
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const canSharePhotos =
    photos.length > 0 &&
    typeof navigator !== "undefined" &&
    typeof navigator.share === "function" &&
    (typeof navigator.canShare !== "function" ||
      navigator.canShare({ files: photos }));

  async function sharePhotosToWhatsApp() {
    track("whatsapp_click", { source: "form_share_photos" });
    try {
      await navigator.share({
        title: `${site.name} inspection request`,
        text: message,
        files: photos,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      window.location.href = whatsappHref(message);
    }
  }

  if (done) {
    return (
      <div className="rounded-sm border border-line bg-white p-6">
        <p className="serif text-2xl">Request captured</p>
        {canSharePhotos ? (
          <p className="mt-3 text-sm leading-6 text-muted">
            On this phone you can send the details and the {photos.length} photo
            {photos.length === 1 ? "" : "s"} in one step. Choose WhatsApp in the
            share sheet.
          </p>
        ) : (
          <p className="mt-3 text-sm leading-6 text-muted">
            WhatsApp’s chat link can only send text. It cannot attach the photos
            from this form. Open WhatsApp with the request, then attach the same
            images from your gallery. If that does not launch, email {site.email}.
          </p>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {canSharePhotos ? (
            <button
              type="button"
              onClick={() => void sharePhotosToWhatsApp()}
              className="inline-flex bg-forest px-5 py-3 text-sm font-medium text-paper"
            >
              Send photos on WhatsApp
            </button>
          ) : null}
          <a
            href={whatsappHref(message)}
            onClick={() => track("whatsapp_click", { source: "form_complete" })}
            className="inline-flex bg-copper px-5 py-3 text-sm font-medium text-white"
          >
            {canSharePhotos ? "Send text only" : "Send on WhatsApp"}
          </a>
        </div>
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
        Step {step} of {TOTAL_STEPS}
      </p>
      <div className="mt-3 h-1 w-full bg-line">
        <div
          className="h-1 bg-forest"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {step === 1 ? (
        <fieldset className="mt-6">
          <legend className="serif text-2xl">What do you need help with?</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {needs.map((need) => (
              <button
                key={need}
                type="button"
                onClick={() => update("need", need)}
                className={`border px-3 py-3 text-left text-sm ${form.need === need ? "border-forest bg-[#e8f3ff]" : "border-line"}`}
              >
                {need}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="mt-6">
          <legend className="serif text-2xl">Property type</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => update("propertyType", type)}
                className={`border px-3 py-3 text-left text-sm ${form.propertyType === type ? "border-forest bg-[#e8f3ff]" : "border-line"}`}
              >
                {type}
              </button>
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
        <PhotoCapture files={photos} onChange={setPhotos} />
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

      {step === 6 ? (
        <fieldset className="mt-6">
          <legend className="serif text-2xl">Inspection fee</legend>
          <p className="mt-2 text-sm leading-6 text-muted">
            Choose the visit type, pay on UPI ({site.upiId}), then send the
            request. Keep the UTR if your app shows one.
          </p>
          <div className="mt-4 grid gap-2">
            {inspectionPackages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => update("packageId", item.id)}
                className={`border px-4 py-3 text-left ${form.packageId === item.id ? "border-forest bg-[#e8f3ff]" : "border-line"}`}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{item.name}</span>
                  <span>₹{item.amount}</span>
                </span>
                <span className="mt-1 block text-sm text-muted">{item.blurb}</span>
              </button>
            ))}
          </div>
          <a
            href={upiPayHref(
              selectedPackage.amount,
              `${site.name} ${selectedPackage.id}`,
            )}
            onClick={() =>
              track("payment_started", {
                amount: selectedPackage.amount,
                package: selectedPackage.id,
              })
            }
            className="mt-4 inline-flex h-12 items-center justify-center bg-forest px-5 text-sm font-medium text-paper"
          >
            Pay ₹{selectedPackage.amount} with UPI
          </a>
          <label className="mt-4 flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={form.paid}
              onChange={(event) => update("paid", event.target.checked)}
            />
            I have completed the UPI payment
          </label>
          <label className="mt-3 grid gap-1 text-sm">
            UTR / UPI reference (optional)
            <input
              value={form.utr}
              onChange={(event) => update("utr", event.target.value)}
              className="h-11 border border-line bg-paper px-3"
              placeholder="12-digit reference"
            />
          </label>
        </fieldset>
      ) : null}

      <div className="mt-8 flex flex-col gap-2">
        {step === 1 && !form.need ? (
          <p className="text-sm text-muted">Select an option to continue.</p>
        ) : null}
        {step === 2 && !form.propertyType ? (
          <p className="text-sm text-muted">Select a property type to continue.</p>
        ) : null}
        <div className="flex gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((value) => value - 1)}
            className="h-11 px-4 text-sm"
          >
            Back
          </button>
        ) : null}
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            disabled={
              (step === 1 && !form.need) ||
              (step === 2 && !form.propertyType) ||
              (step === 3 && !form.location)
            }
            onClick={() => {
              start();
              setStep((value) => value + 1);
            }}
            className="h-11 bg-copper px-5 text-sm font-medium text-white hover:bg-copper-2 disabled:cursor-not-allowed disabled:opacity-40"
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
      </div>
    </form>
  );
}
