import React  from 'react';
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";

export default function Header() {
    const navigate = useNavigate();

    const backToMainPage = () => {
        navigate("/")
    }

    return (
        <header className="top_nav">
            <div className="top_nav_logo" onClick={() => backToMainPage()}>ToDoList</div>
            <input id="menu_toggle" type="checkbox"/>
            <label className='menu_button_container' htmlFor="menu_toggle">
                <div className='menu_button'></div>
            </label>
            <ul className="menu">
                <li className="menu_element"><a href="/" className="menu_route" onClick={logout}>Wyloguj</a></li>
            </ul>
        </header>
    )
}