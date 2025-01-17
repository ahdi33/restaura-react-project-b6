import React from 'react';
import Dishes from "./components/Dishes";
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Mission from './components/Mission';
import Expertise from './components/Expertise'; 
import Review from './components/Review'; 
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';
const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Mission />
      <Expertise />
      <Dishes />
      <Review />
      <ContactSection /> 
      <Footer /> 
      
    </main>
  );
}

export default App;

