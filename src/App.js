import React from 'react';
import NavBar from './Component/NavBar';
import HeroLeft from './Component/HeroLeft';
import HeroRight from './Component/HeroRight';
import LandingPage from './Component/LandingPage';
import OurServices from './Component/OurServices';
import OurClients from './Component/OurClients';
import WhyUs from './Component/WhyUs';
import Testimonials from './Component/Testimonials';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Footer from './Component/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='pagecontent'>
        <NavBar />
        <HeroLeft />
        <HeroRight />
        <LandingPage />
        <OurServices />
        <OurClients />
        <WhyUs />
        <Testimonials />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
