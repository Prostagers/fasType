import DisplayAuthentication from './Components/DisplayAuthentication';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayAuthentication name='Sign Up' />
    </div>
  );
}

export default App;
