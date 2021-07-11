import React from 'react';
import { Link } from 'react-router-dom';
import "./Section.css";

function Section() {
    return (
        <div>
        <section className="home bd-grid" id="home"> 
         <div className="home__data">
                    <h1 className="home__title">Hi,
                        <br/>I am 
                        <span className="home__title-color"> Anurag</span>,
                        <br/>Nice to meet you.
                    </h1>
                    <Link to="contact">
                        <button className="button">Contact</button>
                    </Link>       
              </div>
   
                <div className="home__social">
                <Link to={{ pathname:"https://www.linkedin.com/in/anurag-dobhal-4ba5b1204/" }} target="_blank" >
              <div className="home__social-icon">
                 <i className="fab fa-linkedin-in"/>
              </div>
        </Link>
                  

        <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank" >
             <div class="home__social-icon">
                <i className="fab fa-github-alt"/>
             </div>
        </Link>
                        
        <Link to={{ pathname:"https://instagream.com/anurag_dobhal_/" }} target="_blank" >
                <div className="home__social-icon">
                  <i className="fab fa-instagram"/>
                </div>
        </Link>

<div class="home__img">    
        {/* <img src={"/blob-1.svg"} alt=""/> */}
    <svg className="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0036c9" d="M29.7,-62.4C34.3,-48.8,31,-32.4,28.7,-21.5C26.4,-10.6,25.1,-5.3,26.6,0.8C28,7,32.1,13.9,32,20.6C31.9,27.3,27.5,33.7,21.5,32.7C15.5,31.6,7.7,23,-3.9,29.8C-15.5,36.6,-31.1,58.7,-35.4,58.8C-39.7,58.8,-32.8,36.9,-37.7,23.4C-42.6,10,-59.3,5,-65.2,-3.4C-71.1,-11.8,-66.1,-23.5,-54.8,-25.9C-43.5,-28.3,-25.8,-21.2,-15.6,-31.6C-5.5,-41.9,-2.7,-69.7,4.9,-78.2C12.6,-86.7,25.1,-76,29.7,-62.4Z" transform="translate(100 100)" />
    </svg>
</div>
         </div>
     </section>
 </div>
    )
}

export default Section
