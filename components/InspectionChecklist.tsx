"use client";

import { useState } from "react";
import { checklist } from "../lib/data/checklist";

export default function InspectionChecklist() {
  const [open, setOpen] = useState<string | null>(checklist[0].id);

  return (
    <div className="grid gap-3">
      {checklist.map((group) => {
        const isOpen = open === group.id;
        return (
          <div key={group.id} className="border border-line bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : group.id)}
            >
              <span className="font-medium">{group.title}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-muted">
                {group.items.length} checks
              </span>
            </button>
            {isOpen ? (
              <ul className="grid gap-2 border-t border-line px-5 py-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-scan" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
