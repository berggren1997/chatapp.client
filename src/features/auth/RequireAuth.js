import { useLocation, Navigate } from "react-router-dom";
import ConversationPage from "../../pages/ConversationPage";

const RequireAuth = () => {
  const token = localStorage.getItem("jwt"); //useSelector(selectCurrentToken);
  const location = useLocation();
  return token ? (
    <ConversationPage />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
