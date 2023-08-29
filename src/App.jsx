// src/App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import RoutesConfig from './routes/routes'; // Import the RoutesConfig component
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <RoutesConfig />
        </header>
      </div>
    </Router>
  );
}

export default App;
