import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../src/components/navBar";
import Header from "../src/components/header";
import footer from "../src/components/footer";
import projects from "../src/components/projects";
import About from "../src/components/about";

function App() {
  return (
   <div>

  <NavBar/>
  */ make nav flow into header /* 
  <Header />
  */ add animation /* 
  <projects />
  <about />
  */ add skills and passions under about /* 
    
  <footer />
     </div>
  );
}

export default App;
