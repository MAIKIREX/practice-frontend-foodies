import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonies from './components/Testimonies/Testimonies'
import Fooder from './components/Footer/Fooder'
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='bg-white dark:bg-[#1F2937]'>
        <Navbar/>
        <Hero/>
        <Services/>
        <Banner />
        <AppStore />
        <Testimonies/>
        <Fooder/>
      </div>
    </>
  )
}

export default App