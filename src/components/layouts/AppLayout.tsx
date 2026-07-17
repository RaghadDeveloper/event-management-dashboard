import { Outlet } from "react-router";
import { useInitializeAuth } from "../../features/authentication/hooks/useInitializeAuth";

const AppLayout = () => {
  useInitializeAuth();

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
