
import {  useHistory} from 'react-router-dom';
import './css/form_task.css';
export const Task_form = ({titulo,sendDates,nameButton,task,handleTextChange}) => {

    const history = useHistory();
    return(
        <div id="form_task">
            <label class="titulos">{titulo}</label>
            <form onSubmit={sendDates}>
                <div className="field"><label key="name">Name<br/><input id="nameTask" className="block-field" type="text" onChange={handleTextChange} value={task.nameTask}/></label></div>
                <div className="field"><label key="description">Description<br/><input className="block-field" id="description" type="text" onChange={handleTextChange} value={task.description}/></label></div>
                <div className="field"><label key="date">Due Date<br/><input id="due_date" className="block-field" type="Date" onChange={handleTextChange} value={task.due_date}/></label></div>
                <div className="field"><label className="block-field" key="assigned">AssigmentTo<br/><input id="assigment" class="block-field" type="text" onChange={handleTextChange} value={task.assigment}/></label></div>
                <div className="field"><label className="block-field" key="status">Status<br/></label>
                <select className="block-field" onChange={handleTextChange} id="status" value={task.status}>
                    <option value="">--Status--</option>
                    <option value="Not in progress">Not in progress</option>
                    <option value="In Progress">In progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select></div>
                <button className="button back" onClick={() => history.push("/home")}  type="button">Back</button>
                <input className="button input" type="submit" value={nameButton}></input>
            </form>
        </div>
    );
};
export default Task_form;