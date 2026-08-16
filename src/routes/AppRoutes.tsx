import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../components/layouts/AppLayout";
import Customers from "../pages/Customers";
import Providers from "../pages/Providers";
import Categories from "../pages/Categories";
import Bookings from "../pages/Bookings";
import ProviderDetails from "../pages/ProviderDetails";
import BookingDetails from "../pages/BookingDetails";

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
      { path: "categories", element: <Categories /> },
      {
        path: "providers",
        children: [
          { index: true, element: <Providers /> },
          { path: ":id", element: <ProviderDetails /> },
        ],
      },
      { path: "customers", element: <Customers /> },
      {
        path: "bookings",
        children: [
          { index: true, element: <Bookings /> },
          { path: ":id", element: <BookingDetails /> },
        ],
      },
      { path: "transactions", element: <div>Transactions</div> },
      { path: "notifications", element: <div>Notifications</div> },
      { path: "feedback", element: <div>Feedback</div> },
    ],
  },
]);
