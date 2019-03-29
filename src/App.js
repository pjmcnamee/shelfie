import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import { HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter >
      <div className="App">
        <Header />
        <main>
        <Dashboard />
        </main>
      </div>
      </HashRouter>
    );
  }
}

export default App;
