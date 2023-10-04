import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ element: Component, ...props }) {
  const authSelector = useSelector(state => state.auth.value);

  return authSelector ? <Component { ...props } /> : <Navigate to='/' />;
}
