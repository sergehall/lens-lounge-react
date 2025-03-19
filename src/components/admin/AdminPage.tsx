import { Navigate } from "react-router-dom";
import {useAuth} from "../../api/authService";
import AdminPanel from "./AdminPanel";

const AdminPage = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>;
    if (!user) return <Navigate to="/login" />;

    return (
        <div className="container mx-auto p-6">
            <AdminPanel />
        </div>
    );
};

export default AdminPage;
