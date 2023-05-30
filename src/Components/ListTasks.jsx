import { useState } from "react";

const ListTasks = () => {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if(newTask) {
            setTask([...tasks, newTask]);
            setNewTask('');
        }
    }
    return (
        <div>
            <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <ul style={{listStyle: 'none'}}>
                {tasks.map((task, index)=> (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListTasks;