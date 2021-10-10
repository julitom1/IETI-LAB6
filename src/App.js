import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login';
import Home from './Home';

function App() {
  return (
    <main>
      



      <Router>
        <Switch>
        
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/otra" component={Login}/>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>  
    </main>
  );
}

export default App;
