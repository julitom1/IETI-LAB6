import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import Task from './Task';
import TaskContext from './TaskContext';
import './css/home.css';
import logo from './img/signo.png'; // with 

export const Home = (props) => {

    const  {history} = props;
    const { getTasks } = useContext(TaskContext);
    const tasks=getTasks();
    console.log(tasks);
        
    return(
        <div id="home" key="home">  
            <div className="stick"><img alt='some value' className="button" src={logo} onClick={()=> history.push("/Task_form")}/>  </div>
            <div id="exit"><Link to = "/">Log out</Link></div>
            <label className="titulos">Tasks</label>
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
            
        </div>
    );
};
export default Home;