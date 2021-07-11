import React, { useEffect } from 'react';
import './About.css';
import Aos from 'aos'
import "aos/dist/aos.css";

function About() {
    useEffect(()=>{
        Aos.init({duration:2000});
            },[])
            
    return (
        <section data-aos="fade-up" className="about section " id="about">
        <h2 className="section-title">About</h2>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0036c9" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,202.7C672,160,768,96,864,64C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg> */}
        <div className="about__container bd-grid">
            <div className="about__img">
            <img src={"/svg1.svg"} alt=""/>
            </div>
            
            <div>
                <h2 className="about__subtitle">
                    Hi. I’m Anurag, Get ready to turn your ideas into reality. Please take a look around !
                    </h2>
                    <p className="about__text"> I am a Software Engineer. I completed my Bachelors in Information and Technology and Masters in Computer Science .
                    I specialized in building <b className="mern">Web applications</b> & <b className="mern">Android applications</b> specific to the 
                    business needs of Clients & Organizations. I know my ways on <b className="mern">Back-end </b>
                    but I really like doing the things in <b className="mern">Front-end & UI design</b>. Ideally, I love working on all stages of building a website - from the first sketches, design, implementation to the finished product. 
                    Currently, my main area of focus has been <b className="mern">M E R N</b>. I also like sharing some  <b className="mern">tips & ideas</b> on what I know through my Instagram page -<b className="mern">wikitech.io</b> ,You can find it right below.
                   ‍</p>            
            </div>                                   
        </div>
    </section>
    )
}

export default About
