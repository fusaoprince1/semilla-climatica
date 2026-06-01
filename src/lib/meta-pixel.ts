declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  const fire = () => {
    if (!window.fbq) return false;
    window.fbq("track", event, params);
    return true;
  };

  if (fire()) return;

  let attempts = 0;
  const interval = window.setInterval(() => {
    if (fire() || ++attempts >= 50) {
      window.clearInterval(interval);
    }
  }, 100);
}
