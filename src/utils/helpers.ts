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
    parts.push(`${remainingMinutes} minute`);
  }

  return parts.join(", ");
};

// import { format, parseISO } from "date-fns";

// export const formatDate = (date: string): string => {
//   return format(parseISO(date), "MMM dd, yyyy");
// };


// src/utils/helpers.ts
import { format, isValid } from "date-fns";

export const formatDate = (dateString?: string | Date | null) => {
  if (!dateString) return "__";

  const date = new Date(dateString);

  // التحقق من أن التاريخ صالح قبل تمريره لـ format
  if (!isValid(date)) return "__"; 

  return format(date, "MMM dd, yyyy"); // أو التنسيق المستخدم لديك
};