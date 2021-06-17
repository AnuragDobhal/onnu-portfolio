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

        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0036c9" d="M33.5,-53.8C39.6,-54.5,38,-37.8,44.6,-25.9C51.3,-14,66.3,-7,65.4,-0.5C64.5,6,47.8,12,42.3,26C36.9,40,42.7,62,37.5,61.4C32.3,60.8,16.2,37.6,0.2,37.2C-15.7,36.8,-31.5,59.3,-31.5,56.9C-31.6,54.6,-16,27.4,-24.2,13.8C-32.4,0.2,-64.4,0.1,-70.4,-3.4C-76.3,-7,-56.3,-14,-46.2,-24.3C-36.1,-34.6,-35.9,-48.2,-29.9,-47.5C-23.8,-46.7,-11.9,-31.6,0.9,-33.2C13.7,-34.7,27.4,-53,33.5,-53.8Z" transform="translate(100 100)" />
</svg> */}

{/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0036c9" d="M36.4,-51.2C50.6,-54.8,67.9,-52,74.3,-42.4C80.7,-32.8,76.2,-16.4,74.9,-0.7C73.6,14.9,75.6,29.9,70.8,42.2C65.9,54.5,54.3,64.1,41.3,58.2C28.4,52.3,14.2,30.8,0.1,30.5C-13.9,30.3,-27.8,51.3,-40.4,57C-52.9,62.7,-64.1,53.1,-71.6,41C-79.2,29,-83.1,14.5,-74.9,4.7C-66.7,-5,-46.4,-10,-33.4,-12.7C-20.4,-15.4,-14.8,-15.7,-10.5,-17.8C-6.2,-19.9,-3.1,-23.9,4,-30.8C11.1,-37.7,22.2,-47.7,36.4,-51.2Z" transform="translate(100 100)" />
</svg> */}

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0036c9" d="M29.7,-62.4C34.3,-48.8,31,-32.4,28.7,-21.5C26.4,-10.6,25.1,-5.3,26.6,0.8C28,7,32.1,13.9,32,20.6C31.9,27.3,27.5,33.7,21.5,32.7C15.5,31.6,7.7,23,-3.9,29.8C-15.5,36.6,-31.1,58.7,-35.4,58.8C-39.7,58.8,-32.8,36.9,-37.7,23.4C-42.6,10,-59.3,5,-65.2,-3.4C-71.1,-11.8,-66.1,-23.5,-54.8,-25.9C-43.5,-28.3,-25.8,-21.2,-15.6,-31.6C-5.5,-41.9,-2.7,-69.7,4.9,-78.2C12.6,-86.7,25.1,-76,29.7,-62.4Z" transform="translate(100 100)" />
</svg>





                </div>


         </div>
     </section>
 </div>
    )
}

export default Section
