declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function track(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;
  window.fbq("track", event, params ?? {});
}