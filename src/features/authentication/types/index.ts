export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  initialized: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
  fcm_token: string;
}
