interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = ({ as, children }: HeadingProps) => {
  const HeadingTag = as || "h1";
  const styles = {
    h1: "text-4xl font-bold text-primary-600 mb-4",
    h2: "text-3xl font-semibold text-primary-600 mb-4",
    h3: "text-2xl font-semibold text-text-main mb-4",
    h4: "text-xl font-medium text-text-main mb-4",
    h5: "text-lg font-medium text-text-main mb-4",
    h6: "text-base font-medium text-text-main mb-4",
  };

  return <HeadingTag className={styles[HeadingTag]}>{children}</HeadingTag>;
};

export default Heading;
