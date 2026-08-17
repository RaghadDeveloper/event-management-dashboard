export interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  read_at: string | null;
  created_at: string;
}
