import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDocumentDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = i18n.resolvedLanguage === "ar";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [i18n.resolvedLanguage]);
};
