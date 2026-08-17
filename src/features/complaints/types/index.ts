import type { Booking } from "../../bookings/types";

export interface BookingComplaint {
  id: number;
  customer_id: number;
  provider_id: number;
  customer_name: string;
  provider_name: string;
  status: BookingComplaintStatus;
  description: string;
  booking: Booking;
  created_at: string;
}

type BookingComplaintStatus =
  | "pending"
  | "resolved_release"
  | "resolved_refund";

export interface ResolveComplaintData {
  decision: "release_to_provider" | "refund_to_customer";
  note?: string;
}
