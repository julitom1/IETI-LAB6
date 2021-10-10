import { useState } from "react";
import Task from './Task';

export const Home = (props) => {

    const  {history} = props;

    const [tasks, settask] = useState ([ {
        "nameTask":"1",
        "description":"2",
        "due_date":"due date",
        "assigment":"2",
        "status":"3"
    },{
        "nameTask":"2",
        "description":"3",
        "due_date":"due4 date",
        "assigment":"4",
        "status":"4"
    }]);

   
    return(
        <div key="home">  
            {tasks.map((task,index) =>{                
                return(
                    <Task 
                        NameTask={task.nameTask}
                        Description={task.description}
                        Due_Date={task.due_date}
                        AssigmentTo={task.assigment}
                        Status={task.status}
                        key={index}
                    />
                );
                
            })}

            <button onClick={()=> history.push("/Task_form")}>Add Task</button>
                
        </div>
    );
};
export default Home;