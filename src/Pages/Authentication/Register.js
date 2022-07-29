import React from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { error, handleSubmit, handleName, handleEmail, handlePassword, setIsLogin } = useAuth();

    return (
        <>
            <h1>Please Registration</h1>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleName} type="text" placeholder="Your Name" required />
                <input onBlur={handleEmail} type="email" placeholder="Your Email" required />
                <input onBlur={handlePassword} type="password" placeholder="Your Password" required />
                <br />
                <button type="submit" className="btn-login">Register</button>
                {
                    error && <p className="error-message">{error}</p>
                }

                <p>Already Registered?<strong
                    onClick={() => setIsLogin(true)}
                    className="toggle-user"
                > Log in</strong>
                </p>
            </form>
        </>
    );
};

export default Register;