export const getLink = (
  type: "email" | "location" | "phone" | "external",
  link: string,
) => {
  switch (type) {
    case "email":
      return `mailto:${link}`;
    case "location":
      return `https://www.google.com/maps/search/?api=1&query=${link && encodeURIComponent(link)}`;
    case "phone":
      return `tel:${link?.replace(/\s+/g, "")}`;
    case "external":
      return link?.startsWith("http") ? link : `https://${link}`;
    default:
      return link;
  }
};

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  }

  if (remainingMinutes > 0) {
    parts.push(`${remainingMinutes} min`);
  }

  return parts.join(", ");
};

import { format, parseISO } from "date-fns";

export const formatBookingDate = (date: string): string => {
  return format(parseISO(date), "dd MMM, yyyy");
};
