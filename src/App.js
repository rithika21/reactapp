
//import logo from './logo.svg';
import './App.css';
//import TestComponent from "./Components/classComp/testClassComponent.jsx";
//import Login from "./Components/classComp/LoginClassComponent.jsx"
//import PropsComponent from './Components/functionalComp/PropsComponent';
//import StateComponent from './Components/classComp/StateComponent.jsx';
import NavBar from './component/functional_component/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/functional_component/About.jsx';
import Education from './component/functional_component/Education.jsx';

import Home from './component/functional_component/Home.jsx';
import Login from './component/functional_component/Login.jsx';
//import footer from './component/functional_component/footer.jsx';
import Footer1 from './component/functional_component/Footer1.jsx';
import Signup from './component/functional_component/Signup.jsx';
//import Privacypolicy from './component/functional_component/Privacypolicy.jsx';

function App() {
  return (
   
    <div className="App">
       < div  >
        <h1>HELLO WELCOME TO  ROUTING</h1>
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          
        </Routes>
      </BrowserRouter>

      {/* <PropsComponent name="Rithika" course="MERN"/>  */}
      {/* <header className="App-header">
        {/* <StateComponent/> 
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
      </header> */}
       
      
      <div>
        <Footer1 />
      </div>
    </div>
  );
}

export default App;

