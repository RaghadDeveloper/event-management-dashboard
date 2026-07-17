import type { FormInput } from "../../../types";
import type { LoginPayload } from "../types";

export const loginInputs: FormInput<LoginPayload>[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    validation: { required: "Email is required" },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    validation: { required: "Password is required" },
  },
];
