import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Layout/Header';
import Dashboard from './Layout/Dashboard';
import DisplayAuthentication from './Layout/DisplayAuthentication';

const itemBeforeLogin = [{
  id: 1,
  name: 'Login',
  onClick: () => ReactDOM.render(<DisplayAuthentication name='Login' />, document.getElementById('main-content'))
}, {
  id: 2,
  name: 'Sign Up',
  onClick: () => ReactDOM.render(<DisplayAuthentication name='Sign Up' />, document.getElementById('main-content'))
}];

function App() {
  return (
    <div className="App">
      <Header item={itemBeforeLogin}/>
      <Dashboard />
    </div>
  );
}

export default App;
