// src/App.js

import React from 'react';
import './App.css';
import MapComponent from './MapComponent'; // Import the MapComponent

function App() {
  return (
    <div className="App">
      <h1>My Mapbox Map in React</h1>
      <MapComponent />
    </div>
  );
}

export default App;
