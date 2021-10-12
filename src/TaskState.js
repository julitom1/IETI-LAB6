
import { useState } from "react";
import  TaskContext  from "./TaskContext";
 
const TasksState = (props) => {
    const [tasks, setTasks]= useState([
    {
        description: "Create method delete task",
        nameTask: "Remove Task",
        due_date: "2021-11-30",
        assigment: "Yarit",
        status: "Not in progress"
    },
    {
        description: "Create method update task",
        nameTask: "Update Task",
        due_date: "2021-11-15",
        assigment: "Cesar",
        status: "In progress"
    },
    {
        description: "Create method read task",
        nameTask: "Get Task",
        due_date: "2021-10-30",
        assigment: "Laura",
        status: "Review"
    },
    {
        description: "Create method create task",
        nameTask: "Create Task",
        due_date: "2021-10-15",
        assigment: "Angelica",
        status: "Done"
    },
    {
        description: "Create use cases",
        nameTask: "Use Cases",
        due_date: "2021-09-15",
        assigment: "Yarit",
        status: "Done"
    }
    ])


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
        console.log(idTask);
        for(let i=0;i<tasks.length;i++){
            if(idTask.replace('%20', ' ')===tasks[i].nameTask){
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