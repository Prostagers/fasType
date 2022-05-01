import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Layout/Header';
import Dashboard from './Layout/Dashboard';
import DisplayAuthentication from './Layout/DisplayAuthentication';

function App() {
  const [body, setBody] = useState(<Dashboard />);

  const itemBeforeLogin = [{
    id: 1,
    name: 'Login',
    onClick: () => setBody(<DisplayAuthentication name='Login' />)
  }, {
    id: 2,
    name: 'Sign Up',
    onClick: () => setBody(<DisplayAuthentication name='Sign Up' />)
  }];

  return (
    <div className="App">
      <Header item={itemBeforeLogin}/>
      { body }
    </div>
  );
}

export default App;
