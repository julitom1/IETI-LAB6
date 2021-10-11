import React from "react";
import {  useHistory} from 'react-router-dom';
export const Task = ({NameTask, Description, Due_Date,AssigmentTo,Status}) => {

    

    const NameTask1="NameTask1-"+NameTask
    const Description1="Description2-"+NameTask
    const Due_Date1="Due_Date3-"+NameTask
    const AssigmentTo1="AssigmentTo4-"+NameTask
    const Status1="Status5-"+NameTask
    const history = useHistory();
    function Desplegar(){
        var children = document.getElementById(NameTask).childNodes;
        let i;
        if(document.getElementById(Description1).getAttribute("style") == null){
            
            for (i = 1; i < children.length; i++) {
                children[i].setAttribute("style","display:none");
            }
        }else{
            for (i = 1; i < children.length; i++) {
                children[i].removeAttribute("style");
            }   
        }
    }
    
    return(
        <div key={NameTask} id={NameTask}>
            <span onClick={()=> Desplegar()} id={NameTask1}>{NameTask}</span><br/>
            <span key={Description1} id={Description1}>{Description}</span><br/>
            <span key={Due_Date1} id={Due_Date1}>{Due_Date}</span><br/>
            <span key={AssigmentTo1} id={AssigmentTo1}>{AssigmentTo}</span><br/>
            <span key={Status1} id={Status1}>{Status}</span><br/>
            <button onClick={()=> history.push('/Task_form/'+{NameTask}.NameTask)}>Update</button>
    
        </div>
    );
};

export default Task;