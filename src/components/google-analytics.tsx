import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: {
        page_path?: string;
        page_location?: string;
        page_title?: string;
        anonymize_ip?: boolean;
        cookie_flags?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

export const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    if (navigator.doNotTrack || !window.gtag) return;

    try {
      window.gtag("config", gaId, {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    } catch (error) {
      console.error("Error sending analytics:", error);
    }
  }, [gaId, location]);

  return null;
};

// Utility function for tracking custom events
export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (navigator.doNotTrack || !window.gtag) return;

  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};
