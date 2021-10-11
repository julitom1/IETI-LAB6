
import { useState } from "react";
import  TaskContext  from "./TaskContext";
 
const TasksState = (props) => {
    const [tasks, setTasks]= useState([])


    const getTasks = () => {
        return tasks;
    }

    const newTask = (task) => {
        setTasks([...tasks,task]);
    }

    return(
        <TaskContext.Provider value={{
            getTasks,
            newTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
 
export default TasksState;

    /**function add(){
        const newTask = {
            nameTask: document.getElementById("name").value,
            description: document.getElementById("description").value,
            due_date: document.getElementById("date").value,
            assigment: document.getElementById("assigned").value,
            status: document.getElementById("status").value
          };
    }**/
  