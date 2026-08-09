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
