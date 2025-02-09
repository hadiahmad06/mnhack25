// src/App.js
//import React from 'react';
import '../src/App.css';
import MapService from '../Services/MapService'; // Import the MapComponent


function App() {
  return (
    <div className="App">
      <h1>My Mapbox Map in React</h1>
      <MapComponent />
    </div>
  );
}

export default App;
