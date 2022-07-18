import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./Firebase";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/homepage");
    }, [user, loading]);
    return (
        <div className="register">
            <div className="login_logo"></div>
            <div className="register_container">
                <input
                    type="text"
                    className="register_textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nick"
                />
                <input
                    type="text"
                    className="register_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adres E-mail"
                />
                <input
                    type="password"
                    className="register_textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                />
                <button className="register_btn" onClick={register}>
                    Zarejestruj się
                </button>
                <button
                    className="register_btn register_google"
                    onClick={signInWithGoogle}
                >
                    <span className="button-icon">Zarejestruj się z   <i className="fa-brands fa-google"></i></span>
                </button>
                <div>
                    Masz już konto? <Link to="/">Zaloguj się</Link> teraz.
                </div>
            </div>
        </div>
    );
}
export default Register;