
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Login';
import Home from './Home';
import Task_form from './Task_form';
import TaskState from './TaskState';




function App() {
  return (
    <main>
      <TaskState>
      <Router>
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/otra" component={Login}/>
          <Route path="/Task_form" component={Task_form}/>
          <Route path="/" component={Login}/>
        </Switch>
      </Router> </TaskState> 
    </main>
  );
}

export default App;
