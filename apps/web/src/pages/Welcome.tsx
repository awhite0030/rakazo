import { Navigate } from "react-router-dom";

export function WelcomePage() {
  return <Navigate to="/sign-in" replace />;
}
