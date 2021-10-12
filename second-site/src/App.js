import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import { BrowserRouter as Router,
   Switch,
   Route } from 'react-router-dom';

import { Home }  from './Home';
import { About }  from './About';
import { Users }  from './Users';

function App() {
  return (
    <>
    <Router> 
  <Navibar/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/about" component={About} />
  </Switch>
  </Router>
  </>
  );
}

export default App;
