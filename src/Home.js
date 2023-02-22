import React, { useState } from "react";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Books from "./components/Books/Books";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/intro/Intro";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import Preloader from "./components/Preloader/Preloader";
import Service from "./components/service/Service";
import Sidebar from "./components/sidebar/Sidebar";
import CompanySection from "./components/CompanySection/CompanySection";

const Home = () => {
  const [display, setdisplay] = useState(false);
  return (
    <>
      <Preloader setdisplay={setdisplay} />
      {display && (
        <div className="App md:flex">
          <MobileMenu />
          <Sidebar hompage={true} />
          <div className="w-full">
            <Intro />
            <div className="px-10">
              <About />
            </div>
            <CompanySection/>
            {/* <Service /> */}
            <br/>
            <Books />
            <Blog />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
