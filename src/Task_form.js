

export const Task_form = ({sendDates,nameButton,task,handleTextChange}) => {

    return(
        <form onSubmit={sendDates}>
            <label key="name">Name<br/><input id="nameTask" type="text" onChange={handleTextChange} value={task.nameTask}/></label><br/>
            <label key="description">Description<br/><input id="description" type="text" onChange={handleTextChange} value={task.description}/></label><br/>
            <label key="date">Due Date<br/><input id="due_date" type="Date" onChange={handleTextChange} value={task.due_date}/></label><br/>
            <label key="assigned">AssigmentTo<br/><input id="assigment" type="text" onChange={handleTextChange} value={task.assigment}/></label><br/>
            <label key="status">Status<br/><input id="status" type="text" onChange={handleTextChange} value={task.status}/></label><br/>
            <input type="submit" value="back"></input>
            <input type="submit" value={nameButton}></input>
            
        </form>
    );
};
export default Task_form;