"use client";

import { useEffect, useRef } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

type Props = {
  event: string;
  params?: Record<string, unknown>;
};

export default function MetaTrackEvent({ event, params }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackMetaEvent(event, params);
  }, [event, params]);

  return null;
}
