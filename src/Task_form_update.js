
import React, { useState,useContext } from 'react';
import TaskContext from './TaskContext';
import TaskForm from './Task_form';
import './css/form_task.css';
export const Task_form_update = (props) => {

    const  {history} = props;
    const { updateTask } = useContext(TaskContext);

    const uriTask=window.location.pathname.split("/")[2];
    const { getTask } = useContext(TaskContext);
    const tasktoUpdate=getTask(uriTask);

    const [taskValue, setTaskValue] = useState(tasktoUpdate);
    function sendDates(event){
        
            event.preventDefault();
            updateTask(uriTask,taskValue);
            history.push("/Home")
        
        
    }
    const handleTextChange = (event) => {
        
        const value = event.target.value;
        const attrUpdate = event.target.getAttribute("id");
        const updateTask = {...taskValue};
        updateTask[attrUpdate] = value;
        setTaskValue({...taskValue,
            description: updateTask.description,
            nameTask: updateTask.nameTask,
            due_date: updateTask.due_date,
            assigment: updateTask.assigment,
            status: updateTask.status
        });
      }
    
    return(
        <TaskForm
            titulo = {"Update Task"}
            sendDates = {sendDates}
            nameButton= {"Update"}
            handleTextChange = {handleTextChange}
            task = {taskValue}

        />
    );
};
export default Task_form_update;