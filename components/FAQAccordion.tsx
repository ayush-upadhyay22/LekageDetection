"use client";

import { useState } from "react";
import { faqs } from "../lib/data/faqs";

export default function FAQAccordion({
  items = faqs,
}: {
  items?: readonly { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y border-y border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-base font-medium">{item.question}</span>
              <span className="text-muted">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="max-w-3xl pb-5 text-sm leading-7 text-muted">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
