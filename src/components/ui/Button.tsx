interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "secondary"
    | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "large";
}

const Button = ({
  type,
  variant,
  children,
  onClick,
  disabled,
  size,
}: ButtonProps) => {
  const styles = {
    base: "flex items-center justify-center gap-2 rounded-md cursor-pointer text-gray-50 capitalize transition-all hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-55",
    primary: "bg-primary-600 focus:ring-primary-600",
    secondary:
      "text-text-main hover:disabled:text-text-main hover:disabled:bg-gray-50 hover:bg-primary-600 hover:text-gray-50 hover:opacity-100",
    outline:
      "border border-tertiary bg-transparent text-text-secondary focus:ring-gray-300 hover:bg-bg-secondary hover:text-text-secondary",
    danger: "bg-red-600 focus:ring-red-600",
    success: "bg-green-600 focus:ring-green-600",
    warning: "bg-yellow-500 focus:ring-yellow-500",
  };

  const sizeStyles = {
    small: "px-2 py-1 focus:ring-none",
    large: "px-4 py-2 focus:ring focus:ring-offset-1",
  };

  return (
    <button
      className={`${styles.base} ${sizeStyles[size || "large"]} ${styles[variant]}`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
