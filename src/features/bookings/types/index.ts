import type { City, Customer, Governorate, Provider } from "../../../types";
import type { Category } from "../../categories/types";

export interface Booking {
  id: number;
  service: Service;
  provider: Provider;
  customer: Customer;
  governorate: Governorate;
  city: City;
  booking_date: string;
  start_time: string;
  status: BookingStatus;
  estimated_price: number;
  deposit_deadline: Date;
  final_payment_deadline: Date;
}

export interface Service {
  id: number;
  name: string;
  image: string;
  category: Category;
}

export interface BookingsFilter {
  status?: string;
}

type BookingStatus =
  | "draft"
  | "pending"
  | "accept"
  | "disposit_paid"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "rejected"
  | "expired";
