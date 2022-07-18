import React, {useState, useEffect} from "react";
import { auth, db, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {getTasks} from "./ApiTasks"
import AddTask from "./AddTask"
import Task from "./Task"

export default function HomePage() {
    const [user, setUser] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
     getTasks(setTasks);
    },[])

    const handleCreateTask = (task) => {
        setTasks(prevState => {
            return [
                task,
                ...prevState
            ]
        })
    }

    const handleRemoveTask = (id) => {
        setTasks(prevState => prevState.filter(task => task.id !== id))
    }

    return (
        <div className="homepage">
            <AddTask onAddTask={handleCreateTask}/>
            {tasks.map(task => {
                return <Task key={task.id} {...task} onRemoveTask={handleRemoveTask}/>
            })}
            <a href="/" className="nav__link" onClick={logout}>Wyloguj</a>
        </div>
    )
}