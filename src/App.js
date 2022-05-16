import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Layout/Header';
import Dashboard from './Layout/Dashboard';
import DisplayAuthentication from './Layout/DisplayAuthentication';
import Provider from './Provider/GlobalProvider';

function App() {
  
  const Routing = (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Dashboard /> } />
        <Route exact path="/login" element={ <DisplayAuthentication name='Login' /> } />
        <Route exact path="/signup" element={ <DisplayAuthentication name='Sign up' /> } />
      </Routes>
    </Router>
  )

  return (
    <Provider>
    <div className="App">
      <Header />
      <ToastContainer />
      { Routing }
    </div>
    </Provider>
  );
}

export default App;
