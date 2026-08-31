"use client";

import Link from "next/link";
import { track } from "../lib/analytics";

export default function BookLink({
  href = "/contact",
  source,
  className,
  children,
}: {
  href?: string;
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("book_inspection_click", { source })}
    >
      {children}
    </Link>
  );
}
