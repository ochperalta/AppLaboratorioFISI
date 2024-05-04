import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ children }) {
  const { user, loading } = UseAuth();

  if (loading) return <><h1>Cargando...</h1></>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}


