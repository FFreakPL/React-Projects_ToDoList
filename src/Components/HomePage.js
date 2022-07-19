import React, {useState, useEffect} from "react";
import { auth, db, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {getTasks} from "./API/ApiTasks"
import AddTask from "./ToDoListComponents/AddTask"
import Task from "./ToDoListComponents/Task"
import Header from "./Header"

export default function HomePage() {
    const [user, setUser] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
     getTasks(setTasks);
    },[])

    const handleCreateTask = (task) => {
        setTasks(prevTasks => {
            return [
                task,
                ...prevTasks
            ]
        })
    }

    const handleRemoveTask = id => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return (
        <div className="homepage">
            <Header />
            <AddTask onNewTask={handleCreateTask}/>
            {tasks.map(task => {
                return <Task key={task.id} {...task} onRemoveTask={handleRemoveTask}/>
            })}
        </div>
    )
}