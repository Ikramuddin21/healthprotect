import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { error, handleSubmit, handleEmail, handlePassword, setIsLogin } = useAuth();

    return (
        <>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmail} type="email" placeholder="Your Email" required />
                <input onBlur={handlePassword} type="password" placeholder="Your Password" required />
                <br />
                <button type="submit" className="btn-login">Login</button>
                {
                    error && <p className="error-message">{error}</p>
                }
                <p>Not a member?<strong
                    onClick={() => setIsLogin(false)}
                    className="toggle-user"
                > Create Account</strong>
                </p>
            </form>
        </>
    );
};

export default Login;