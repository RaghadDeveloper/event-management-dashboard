export interface Payment {
  id: number;
  payment_type:
    | "deposit"
    | "final_balance"
    | "submission_fee"
    | "add_on_payment";
  status: "pending" | "succeeded" | "failed";
  amount: number;
  event: {
    id: number;
    title: string;
  };
  created_at: string;
}

export interface Payout {
  id: number;
  amount: number;
  reason: string;
  status:
    | "awaiting_release"
    | "cancelled"
    | "scheduled_for_completion"
    | "released"
    | "on_hold";
  release_at?: string;
  booking: {
    id: number;
    service: string;
  };
  created_at: string;
}

export interface Filter {
  from_date?: string;
  to_date?: string;
}
