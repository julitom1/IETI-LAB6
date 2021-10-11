
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Login';
import Home from './Home';
import newTask from './newTask';
import TaskState from './TaskState';
import Task_form_update from './Task_form_update';




function App() {
  return (
    <main>
      <TaskState>
      <Router>
        <Switch>
        <Route path="/Task_form/:taskName" component={Task_form_update}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/otra" component={Login}/>
          <Route path="/Task_form" component={newTask}/>
          <Route path="/" component={Login}/>
        </Switch>
      </Router> </TaskState> 
    </main>
  );
}

export default App;
