import React from 'react';
import Board from './Components/Board';
import {HelmetProvider} from 'react-helmet-async';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Board />
      </div>
    </HelmetProvider>
  );
}

export default App;
