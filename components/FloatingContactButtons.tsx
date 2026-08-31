"use client";

import Link from "next/link";
import { track } from "../lib/analytics";
import { site, telHref, whatsappHref } from "../lib/site";

export default function FloatingContactButtons() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium">
        <a
          href={telHref}
          onClick={() => track("call_click", { source: "mobile_bar" })}
          className="rounded-sm bg-forest px-2 py-3 text-paper"
        >
          Call now
        </a>
        <a
          href={whatsappHref()}
          onClick={() => track("whatsapp_click", { source: "mobile_bar" })}
          className="rounded-sm border border-line px-2 py-3"
        >
          WhatsApp
        </a>
        <Link
          href="/contact"
          onClick={() => track("book_inspection_click", { source: "mobile_bar" })}
          className="rounded-sm bg-copper px-2 py-3 text-white"
        >
          Book
        </Link>
      </div>
      <p className="sr-only">{site.name} mobile contact bar</p>
    </div>
  );
}
