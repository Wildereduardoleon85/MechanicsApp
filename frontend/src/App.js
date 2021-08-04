import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Tickets from './Components/Tickets/Tickets';
import Github from './Components/Github';
import NotFound from './Components/NotFound';
import TicketsState from './context/tickets/TicketsState';
import MechanicsState from './context/mechanics/MechanicsState';

function App() {
  return (
    <TicketsState>
      <MechanicsState>
        <Router>
          <header>
            <Navbar/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Tickets}/>
              <Route exact path="/github" component={Github}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </Router>
      </MechanicsState>
    </TicketsState>
  );
}

export default App;
