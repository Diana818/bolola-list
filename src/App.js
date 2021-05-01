import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/home';
import {Add} from './components/add';
import {Edit} from './components/edit';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return(
    <div style = {{maxWidth: "30 rem", margin: "4rem auto" }} >
      <Router> 
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/Add" component = {Add} />
          <Route path = "/edit/:id" component = {Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

