import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import {
  selectIsAuthenticated,
  selectIsInitialized,
} from "../features/authentication/store/authSelectors";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const initialized = useAppSelector(selectIsInitialized);

  if (!initialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
