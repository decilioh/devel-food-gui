import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Loader } from "../components/common/Loader";

type PrivateProps = {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateProps) => {

    const { isAuthenticated, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    if (!isAuthenticated) {
        return <Navigate to='/' />;
    }

    return children;

}