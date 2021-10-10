export const Task = ({NameTask, Description, Due_Date,AssigmentTo,Status,Index}) => {
    return(
        <div key={Index}>
            <span key="NameTask">{NameTask}</span><br/>
            <span key="Description">{Description}</span><br/>
            <span key="Due_Date">{Due_Date}</span><br/>
            <span key="AssigmentTo">{AssigmentTo}</span><br/>
            <span key="Status">{Status}</span><br/>
        </div>
    );
};

export default Task;