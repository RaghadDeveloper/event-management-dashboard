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
  end_time: string;
  duration: string;
  status: BookingStatus;
  estimated_price: number;
  final_price: number;
  buffer_after_minutes: number;
  deposit_deadline: Date;
  final_payment_deadline: Date;
  customer_notes: string;
}

export interface Service {
  id: number;
  name: string;
  title: string;
  image: string;
  category: Category;
  pricing_type_view: string;
  base_price: number;
}

export interface BookingsFilter {
  status?: string;
}

type BookingStatus =
  | "pending"
  | "accepted"
  | "deposit_paid"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "rejected"
  | "expired";
