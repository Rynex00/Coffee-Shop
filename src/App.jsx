import React, { useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navber from './Component/Navber/Navber';
import Home from './Component/home/Home';
import Services from './Component/Services/Services';
import Banner from './Component/Banner/Banner';
import AppStore from './Component/AppStore/AppStore';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  })

  return ( 
    <div >
      <Navber/>
      <Home/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>

    </div>
  )
}

export default App;
