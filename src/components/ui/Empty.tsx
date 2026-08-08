import { useTranslation } from "react-i18next";

const Empty = ({ resource }: { resource: string }) => {
  const { t } = useTranslation();

  return <p>{t(`no ${resource} could be found`)}.</p>;
};

export default Empty;
