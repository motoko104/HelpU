import React from 'react';
import './App.css';
import MainJumbo from './MainJumbo';
import NavBar from './Navbar';
import HelpCard from './HelpCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainJumbo/>
      <HelpCard/>
    </div>
  );
}

export default App;
