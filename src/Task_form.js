import React, { useContext } from 'react';
import TaskContext from './TaskContext';

export const Task_form = (props) => {

    const  {history} = props;
    const { newTask } = useContext(TaskContext);

    function sendDates(event){
        event.preventDefault();
        newTask({
            nameTask: document.getElementById("name").value,
            description: document.getElementById("description").value,
            due_date: document.getElementById("date").value,
            assigment: document.getElementById("assigned").value,
            status: document.getElementById("status").value
        });
        
        history.push("/Home")
        
    }

    return(
        <form onSubmit={sendDates}>
            <label key="name">Name<br/><input id="name" type="text" /></label><br/>
            <label key="description">Description<br/><input id="description" type="text" /></label><br/>
            <label key="date">Due Date<br/><input id="date" type="Date" /></label><br/>
            <label key="assigned">AssigmentTo<br/><input id="assigned" type="text" /></label><br/>
            <label key="status">Status<br/><input id="status" type="text" /></label><br/>
            <input onClick={()=> history.push("/Home")} type="submit" value="back"></input>
            <input type="submit" value="Add"></input>
            
        </form>
    );
};
export default Task_form;