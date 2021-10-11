import React,{ useContext } from "react";
import Task from './Task';
import TaskContext from './TaskContext';

export const Home = (props) => {

    const  {history} = props;
    const { getTasks } = useContext(TaskContext);
    const tasks=getTasks();
        
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
                        Index={index}
                        key={index}
                    
                    />
                );
                
            })}
            <button onClick={()=> history.push("/Salir")}>Exit</button>
            <button onClick={()=> history.push("/Task_form")}>Add Task</button>
                
        </div>
    );
};
export default Home;