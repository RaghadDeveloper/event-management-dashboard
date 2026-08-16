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
