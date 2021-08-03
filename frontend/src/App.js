import './App.css';
import React from 'react';
import Navbar from './Components/layout/Navbar';
import Tickets from './Components/Tickets';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Tickets/>
      </main>
    </>
  );
}

export default App;
