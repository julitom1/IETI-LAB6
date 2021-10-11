
import { useState } from "react";
import  TaskContext  from "./TaskContext";
 
const TasksState = (props) => {
    const [tasks, setTasks]= useState([])


    const getTasks = () => {
        return tasks;
    } 
    const getTask = (idTask) => {
        const nTask=searchTask(idTask);
        return tasks[nTask];
    }

    const newTask = (task) => {
        setTasks([...tasks,task]);
    }
    const searchTask = (idTask) => {
        for(let i=0;i<tasks.length;i++){
            if(idTask===tasks[i].nameTask){
                return i;
            }
        
        }
    }
    const updateTask = (idTask,task) => {
        const nTask=searchTask(idTask);
        const arr = [...tasks];
        arr[nTask]=task;
        setTasks(arr); 
    }

    return(
        <TaskContext.Provider value={{
            getTasks,
            newTask,
            updateTask,
            getTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TasksState;