export type AnalyticsEvent =
  | "book_inspection_click"
  | "call_click"
  | "whatsapp_click"
  | "form_started"
  | "form_submitted"
  | "service_viewed"
  | "location_viewed"
  | "report_sample_opened"
  | "payment_started";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(
  event: AnalyticsEvent,
  payload: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  const entry = { event, ...payload, ts: Date.now() };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(entry);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", entry);
  }
}
