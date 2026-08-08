import { RouterProvider } from "react-router";
import { useInitializeAuth } from "../../features/authentication/hooks/useInitializeAuth";
import { routes } from "../../routes/AppRoutes";

const AppBootstrap = () => {
  useInitializeAuth();

  return <RouterProvider router={routes} />;
};

export default AppBootstrap;
