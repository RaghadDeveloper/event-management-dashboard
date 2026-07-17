interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant: "primary" | "danger" | "success" | "warning";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type,
  variant,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  const styles = {
    base: "px-4 py-2 rounded-md cursor-pointer text-gray-50 transition-all hover:opacity-75 focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-55",
    primary: "bg-primary-600 focus:ring-primary-600",
    danger: "bg-red-600 focus:ring-red-600",
    success: "bg-green-600 focus:ring-green-600",
    warning: "bg-yellow-500 focus:ring-yellow-500",
  };
  return (
    <button
      className={`${styles.base} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
