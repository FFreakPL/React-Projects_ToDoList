import React from 'react';
import { auth, db, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {getTasks} from "./ApiTasks"

export default function HomePage() {
    const [user, setUser] = useAuthState(auth);
    return (
        <div className="homepage">
            Welcome Stanger!!
            <h1>Here are your tasks:</h1>
            {getTasks()}
            <a href="/" className="nav__link" onClick={logout}>Wyloguj</a>
        </div>
    )
}