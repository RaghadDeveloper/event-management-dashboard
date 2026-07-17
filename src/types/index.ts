import type { FieldPath, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface FormInput<T extends FieldValues> {
  name: Path<T>;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  validation?: RegisterOptions<T>;
}

export interface ServerValidationErrors<T extends FieldValues> {
  errors?: Partial<Record<FieldPath<T>, string>>;
  message?: string;
}