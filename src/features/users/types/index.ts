export interface CustomersFilters {
  is_banned?: boolean;
  search?: string;
  governorate_id?: string;
  page?: string;
}

export interface ProvidersFilters {
  is_banned?: boolean;
  search?: string;
  governorate_id?: string;
  page?: string;
  approval_status?: string;
}

export interface WorkingHour {
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_active: boolean;
}

export interface Portfolio {
  id: number;
  type: "image" | "video";
  url: string;
}

export interface Review {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  created_at: string;
}
