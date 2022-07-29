import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    // google sign in
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    // email & password authentication

    // handle name
    const handleName = (e) => {
        setName(e.target.value);
    };

    // handle email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // handle password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // login handle
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters.");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        isLogin ? processLogin(email, password) : processCreateAccount(email, password)
    };

    // create account process
    const processCreateAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError("");
                emailVarification();
                setUserName();
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    // login process
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
    };

    // set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                console.log(result);
            })
    };

    //  send email varification link
    const emailVarification = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            })
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
        return unsubscribe;
    }, []);

    return {
        user,
        isLogin,
        error,
        setUser,
        setError,
        setIsLogin,
        signInUsingGoogle,
        handleSubmit,
        handleName,
        handleEmail,
        handlePassword,
        logout
    }
};

export default useFirebase;