import React from 'react';
import Nav from './NavBar';
import  Header  from './Header'; 
import About from './About';
import Work from './Work';
import Footer from './footer';




const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
