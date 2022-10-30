import React,{useEffect} from 'react'
import "./Mainpagenologin.css"
import {Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FormSuggestion from '../components/FormSuggestion';
import Header from '../components/Header';
const Mainpagenologin = () => {

    useEffect(() => {
        AOS.init({ duration : 2000});
      }, [])
        
  return (
 <div className = "container">
   
    <div className="container-bg">
      <Header/>
      <h1>De ce sa ti reduci amprenta de CO2  si cum sa ai un impact pozitiv asupra mediului</h1>
   
      <h3>Alternativa ta eco friendly la produsele pe care le consumi zi de zi</h3>
    </div>
   
     <div className="main-grid">
        <div  className="grid-el"  data-aos="fade-left">
            <h4>Masini electrice</h4>
            <img src="electric-car.jpeg"/>
        </div>

        <div  data-aos="fade-right"  className="grid-el">
            <h4>Trotinete electrice</h4>
            <img src="electric-scooter.jpeg"/>
        </div>
        <div   data-aos="fade-left"  className="grid-el">
            <h4>Puncte de reciclare haine </h4>
            <img src="clothes.webp"/>
        </div>
        <div   data-aos="fade-right"  className="grid-el">
            <h4>Panouri Solare </h4>
            <img src="panouri-solare.jpeg"/>
        </div>
     </div>
  <FormSuggestion/>
   
        </div>
    
  )
}

export default Mainpagenologin