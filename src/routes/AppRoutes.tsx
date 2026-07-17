import { createBrowserRouter } from "react-router";
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
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
