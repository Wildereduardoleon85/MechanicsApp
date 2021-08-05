import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Tickets from './Components/Tickets/Tickets';
import Github from './Components/Github/Github';
import NotFound from './Components/NotFound';
import TicketsState from './context/tickets/TicketsState';
import MechanicsState from './context/mechanics/MechanicsState';
import GithubState from './context/github/GithubState';

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
              <GithubState>
                <Route exact path="/github" component={Github}/>
              </GithubState>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </Router>
      </MechanicsState>
    </TicketsState>
  );
}

export default App;
