import React, { useEffect } from 'react';
import Form from './Form' ; 
import './Contact.css';
import Aos from 'aos'
import "aos/dist/aos.css";

const Contact = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
            },[])
            
    return (
    <div data-aos="fade-up" className="contact section" id="contact">
         <h2 className="section-title">Contact</h2>
         <Form/>
   </div>
    
    )
}
export default Contact












