import React from 'react';
import Header from './Components/Header';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        { routes }
      </div>
    </Router>
  );
}

export default App;
