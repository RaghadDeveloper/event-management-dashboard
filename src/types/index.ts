import type { ComponentType, SVGProps } from "react";
import type {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

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

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface Governorate {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  governorate_id: number;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  gender: string;
  age: number;
  governorate: Governorate;
  city: City;
  is_banned: boolean;
}
