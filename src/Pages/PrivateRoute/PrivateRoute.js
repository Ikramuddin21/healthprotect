import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user } = useAuth();

    return (
        user.email ? children : <Navigate to="/login-register" state={{ from: location }} replace />
    )
};

export default PrivateRoute;