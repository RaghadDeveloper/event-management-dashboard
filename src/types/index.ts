import type { ComponentType, SVGProps } from "react";
import type {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import type { Category } from "../features/categories/types";
import type { WorkingHour } from "../features/users/types";

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

export interface InfoBlockProps {
  Icon?: IconType;
  title: string;
  value: string;
  col?: boolean;
  className?: string;
  linkType?: "email" | "phone" | "location" | "external" | undefined;
}

export type ButtonVariant =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "secondary"
  | "outline";

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

export interface Provider {
  id: number;
  service_provider_id: number;
  name: string;
  business_name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  gender: string;
  age: number;
  years_of_experience: number;
  governorate: Governorate;
  city: City;
  approval_status: "approved" | "rejected" | "pending";
  is_banned: boolean;
  rating: number;
  reviews_count: number;
  description: string;
  categories: Category[];
  working_hours: WorkingHour[];
}
