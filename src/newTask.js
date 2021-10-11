import React, { useState, useContext } from 'react';
import TaskContext from './TaskContext';
import TaskForm from './Task_form';


export const NewTask = (props) => {

    const  {history} = props;
    const { newTask } = useContext(TaskContext);

    const [taskValue, setTaskValue] = useState({
        description: "",
        nameTask: "",
        due_date: "",
        assigment: "",
        status: ""
    });

    function sendDates(event){
        event.preventDefault();
        newTask(taskValue);
        history.push("/home");        
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
            sendDates = {sendDates}
            nameButton= {"Add"}
            handleTextChange = {handleTextChange}
            task = {taskValue}

        />
    );
};
export default NewTask;