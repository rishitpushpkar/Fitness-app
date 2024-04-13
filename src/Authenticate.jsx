import { Navigate } from "react-router-dom";

export default function Authenticate() {
  const token = localStorage.getItem("token");
  return (
    <>{token ? <Navigate to="/mainScreen" /> : <Navigate to="/onboarding" />}</>
  );
}
