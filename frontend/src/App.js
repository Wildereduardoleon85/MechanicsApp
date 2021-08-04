import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Tickets from './Components/Tickets/Tickets';
import TicketsState from './context/tickets/TicketsState';
import MechanicsState from './context/mechanics/MechanicsState';

function App() {
  return (
    <>
      <TicketsState>
        <MechanicsState>
          <header>
            <Navbar/>
          </header>
          <main>
            <Tickets/>
          </main>
        </MechanicsState>
      </TicketsState>
    </>
  );
}

export default App;
