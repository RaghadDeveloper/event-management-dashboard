import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../components/layouts/AppLayout";

export const routes = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "services", element: <div>Services</div> },
      { path: "providers", element: <div>Providers</div> },
      { path: "customers", element: <div>Customers</div> },
      { path: "transactions", element: <div>Transactions</div> },
      { path: "notifications", element: <div>Notifications</div> },
      { path: "feedback", element: <div>Feedback</div> },
    ],
  },
]);
