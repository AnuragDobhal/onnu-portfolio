import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Insta.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function Insta() {
    useEffect(()=>{
        Aos.init({duration:2000});
            },[])
    return (
        <div>
        <section data-aos="fade-up" className="skills section" id="skills">
            <h2 className="section-title">Tips & Ideas</h2>
  
                <div className="insta__container bd-grid">          
                    <div>
                        <p className="insta__text"> Sharing some short Programming based tips & ideas on my Instagram page!</p>
                        <Link to={{ pathname:"https://instagram.com/wikitech.io/" }} target="_blank" >
                        <p className="insta__tech">Visit - wikitech.io</p>
                        </Link>
                   
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Insta





