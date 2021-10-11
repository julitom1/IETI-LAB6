
import React, { useState,useContext } from 'react';
import TaskContext from './TaskContext';

export const Task_form_update = (props) => {

    const  {history} = props;
    const { updateTask } = useContext(TaskContext);

    const uriTask=window.location.pathname.split("/")[2];
    const { getTask } = useContext(TaskContext);
    const task=getTask(uriTask);

    const [taskValue, setTaskValue] = useState(task);

    function sendDates(event){
        event.preventDefault();
        updateTask(uriTask,{
            nameTask: document.getElementById("nameTask").value,
            description: document.getElementById("description").value,
            due_date: document.getElementById("due_date").value,
            assigment: document.getElementById("assigment").value,
            status: document.getElementById("status").value
        });
        
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
        <form onSubmit={sendDates}>
            <label key="name">Name<br/><input id="nameTask" type="text" onChange={handleTextChange} value={taskValue.nameTask}/></label><br/>
            <label key="description">Description<br/><input id="description" type="text" onChange={handleTextChange} value={taskValue.description}/></label><br/>
            <label key="date">Due Date<br/><input id="due_date" type="Date" onChange={handleTextChange} value={taskValue.due_date}/></label><br/>
            <label key="assigned">AssigmentTo<br/><input id="assigment" type="text" onChange={handleTextChange} value={taskValue.assigment}/></label><br/>
            <label key="status">Status<br/><input id="status" type="text" onChange={handleTextChange} value={taskValue.status}/></label><br/>
            <input onClick={()=> history.push("/Home")} type="submit" value="back"></input>
            <input type="submit" value="Update"></input>
            
        </form>
    );
};
export default Task_form_update;