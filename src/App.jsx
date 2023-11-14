
import Header from "./components/Header/Header";

import Hero from "./components/Hero/Hero";

import'./App.css'
import Companies from "./components/Companies/Companie";
import Residence from "./components/Residences/Residence";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient" />
    <Header/>
  <Hero/>
    </div>
  <Companies/>
  <Residence/>
  <Value/>
  <Contact/>
  <Getstarted/>
  <Footer/>
  
  
 
  
  
 
   </div>
  );
}

export default App;
