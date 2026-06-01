"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

type Props = {
  event: string;
  params?: Record<string, unknown>;
};

export default function MetaTrackEvent({ event, params }: Props) {
  useEffect(() => {
    trackMetaEvent(event, params);
  }, [event, params]);

  return null;
}
