import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Login from '../Login';
import Register from '../Register';
import './LoginRegister.css';

const LoginRegister = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { isLogin, setUser, setError, signInUsingGoogle } = useAuth();
    const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri);
            setUser(result.user);
            setError("");
        })
        .catch(error => {
            setError(error.message);
        })
    };

    return (
        <div className="authentication-container d-flex items-center">
            <div className="authentication">
                {
                    isLogin ? <Login /> :
                        <Register />
                }
                <button className="btn-login btn-google" onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
        </div>
    );
};

export default LoginRegister;