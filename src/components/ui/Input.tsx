import { useState } from "react";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ErrorMessage from "./ErrorMessage";
import type { FormInput } from "../../types";

interface InputProps<T extends FieldValues> {
  inputData: FormInput<T>;
  register: UseFormRegister<T>;
  error?: string;
  disabled?: boolean;
}

const Input = <T extends FieldValues>({
  inputData,
  register,
  error,
  disabled,
}: InputProps<T>) => {
  const { name, type, placeholder, validation } = inputData;
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={name}>{placeholder}</label>
      <input
        id={name}
        type={type === "password" ? (!show ? "password" : "text") : type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`input ${error && "border-red-600"} ${type === "password" && "pr-10"} `}
        disabled={disabled}
      />

      {type === "password" && (
        <span
          className={`absolute right-3 top-11 text-gray-600 ${disabled ? "opacity-35 cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => {
            if (!disabled) setShow(!show);
          }}
        >
          {show ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
      )}

      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default Input;
