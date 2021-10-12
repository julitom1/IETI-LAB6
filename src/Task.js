import React from "react";
import { Link } from "react-router-dom";
export const Task = ({NameTask, Description, Due_Date,AssigmentTo,Status}) => {

    

    const NameTask1="NameTask1-"+NameTask
    const Description1="Description2-"+NameTask
    const Due_Date1="Due_Date3-"+NameTask
    const AssigmentTo1="AssigmentTo4-"+NameTask
    const Status1="Status5-"+NameTask
    const path='/Task_form/'+{NameTask}.NameTask;
    const styleOfTheComponent ={
        display: "none"
    }
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
        <div key={NameTask} id={NameTask} className="task" onClick={()=> Desplegar()}>
            <div className="nameTask-1"><span  id={NameTask1}>{NameTask}</span></div>
            <div key={Description1} id={Description1} style={styleOfTheComponent}><label className="details-pre">Description: </label><span class="details-pos">{Description}</span></div>
            <div key={Due_Date1} id={Due_Date1} style={styleOfTheComponent}><label className="details-pre">Due Date: </label><span class="details-pos">{Due_Date}</span></div>
            <div key={AssigmentTo1} id={AssigmentTo1} style={styleOfTheComponent}><label className="details-pre">Assigment To: </label><span class="details-pos">{AssigmentTo}</span></div>
            <div key={Status1} id={Status1} style={styleOfTheComponent}><label className="details-pre">Status: </label><span class="details-pos">{Status}</span></div>
            <div style={styleOfTheComponent} className="button"><Link to={path}>Update</Link></div>
    
        </div>
    );
};

export default Task;