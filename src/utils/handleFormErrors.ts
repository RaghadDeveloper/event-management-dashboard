import type { AxiosError } from "axios";
import type { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";
import type { ServerValidationErrors } from "../types";

interface handleFormErrorsProps<T extends FieldValues> {
  error: AxiosError<ServerValidationErrors<T>> | null;
  setError: UseFormSetError<T>;
}

export const handleFormErrors = <T extends FieldValues>({
  error,
  setError,
}: handleFormErrorsProps<T>) => {
  if (!error) return;

  const errorData = error.response?.data;
  const validationErrors =
    errorData?.errors ??
    (typeof errorData?.message === "object" ? errorData.message : undefined);

  if (validationErrors) {
    Object.entries(validationErrors).forEach(([field, message]) => {
      setError(field as FieldPath<T>, {
        type: "server",
        message: Array.isArray(message) ? message[0] : String(message),
      });
    });

    return;
  }

  setError("root", {
    type: "server",
    message:
      typeof errorData?.message === "string"
        ? errorData.message
        : error.message,
  });
};
