import Loader from "components/Loader";
import { Navigate } from "react-router-dom";



export function PrivateRoute({ children }) {
    const { currentUser, loading } = { currentUser: { email: "test@test.com" }, loading: false };
    if (loading) return <Loader />;

    return currentUser?.email ? children : <Navigate to="login" replace />;
}
