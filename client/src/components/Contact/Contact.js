import React from 'react';
import Form from './Form' ; 
import './Contact.css';
const Contact = () =>{

    return (

    //     <section className="contact section" id="contact">
    //     <h2 className="section-title">Contact</h2>
    //     <div className="contact__container bd-grid">
    //         <form action="" className="contact__form">
    //             <input type="text" placeholder="Your Name" className="contact__input"/>
    //             <input type="mail" placeholder="Your Email" className="contact__input"/>
    //             <textarea name="" id="" cols="0" rows="10" placeholder="Write something" className="contact__input"/>
    //             <input type="button" value="Submit" className="submit__button btn"/>
    //         </form>
    //     </div>
    // </section>


    <div className="contact section" id="contact">
         <h2 className="section-title">Contact</h2>
         <Form/>
   </div>
    
    )
}
export default Contact












