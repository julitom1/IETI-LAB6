
export const Task = ({NameTask, Description, Due_Date,AssigmentTo,Status},props) => {

    const  {history} = props;

    const NameTask1="NameTask-"+NameTask
    const Description1="Description-"+NameTask
    const Due_Date1="Due_Date-"+NameTask
    const AssigmentTo1="AssigmentTo-"+NameTask
    const Status1="Status-"+NameTask

    function desplegar(){
        var children = document.getElementById(NameTask).childNodes;
        if(document.getElementById(Description1).getAttribute("style") == null){
            
            for (var i = 1; i < children.length; i++) {
                children[i].setAttribute("style","display:none");
            }
        }else{
            for (var i = 1; i < children.length; i++) {
                children[i].removeAttribute("style");
            }   
        }
    }
    
    return(
        <div id={NameTask}>
            <a onClick={()=> desplegar()} id={NameTask1}>{NameTask}</a><br/>
            <span key={Description} id={Description1}>{Description}</span><br/>
            <span key={Due_Date} id={Due_Date1}>{Due_Date}</span><br/>
            <span key={AssigmentTo} id={AssigmentTo1}>{AssigmentTo}</span><br/>
            <span key={Status} id={Status1}>{Status}</span><br/>
            <button onClick={()=> history.push("/Task_form")}>Update</button>
        </div>
    );
};

export default Task;