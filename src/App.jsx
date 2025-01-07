import React from "react";
import Nav from "./Navbar/NavBar";
import Header from "./Header/Header";
import About from "./About/About";
import Work from "./Work/Work";
import Footer from "./Footer/footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
