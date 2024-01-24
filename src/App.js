import './App.css';
import Login from "./component/class_component/LoginComponent.jsx";
import TestComp from './component/functional_component/testcomponent';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <TestComp> </TestComp>
      <Login />

      <header className="App-header">
        <TestComp />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
