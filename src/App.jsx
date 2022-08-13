import './App.css';
import Homepage from './pages/Homepage';

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
