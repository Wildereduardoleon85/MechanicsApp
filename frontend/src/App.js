import './App.css';
import React from 'react';
import Navbar from './Components/layout/Navbar';
import Tickets from './Components/Tickets';
import TicketsState from './context/tickets/TicketsState';

function App() {
  return (
    <>
      <TicketsState>
        <header>
          <Navbar/>
        </header>
        <main>
          <Tickets/>
        </main>
      </TicketsState>
    </>
  );
}

export default App;
