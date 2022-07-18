import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./Firebase";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/homepage");
    }, [user, loading]);
    return (
        <div className="reset">
            <div className="login_logo"></div>
            <div className="reset_container">
                <input
                    type="text"
                    className="reset_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adres E-mail"
                />
                <button
                    className="reset_btn"
                    onClick={() => sendPasswordReset(email)}
                >
                    Zresetuj hasło przez e-mail
                </button>
                <div>
                    Nie masz konta? <Link to="/register">Zarejestruj się</Link> teraz.
                </div>
            </div>
        </div>
    );
}
export default Reset;