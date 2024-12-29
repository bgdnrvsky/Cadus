import {AuthStatus, useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {JSX} from "react";


export default function ProtectedRoute({children}: {children: JSX.Element}) {
    const { status } = useAuth();

    if (status !== AuthStatus.AUTHENTICATED) {
        return <Navigate to={"/login"} replace/>
    }

    return children;
}