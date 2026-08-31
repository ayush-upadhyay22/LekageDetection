"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "../lib/analytics";

export default function TrackOnMount({
  event,
  id,
}: {
  event: AnalyticsEvent;
  id?: string;
}) {
  useEffect(() => {
    track(event, id ? { id } : {});
  }, [event, id]);

  return null;
}
