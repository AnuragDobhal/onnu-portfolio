import React, { useEffect } from 'react';
import './Work.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";



function Work() {
    useEffect(()=>{
        Aos.init({duration:2000});
            },[])
    return (
<section data-aos="fade-up" className="work section" id="work">
    <h2 className="section-title">Work</h2>
        <div className="work__container bd-grid">
            <div className="work__img">
                <Link to={{ pathname:"https://www.weazy.in/" }} target="_blank" >
                  <img src={"/work1.png"} alt=""/>
                </Link>
            </div>
         
                <div className="work__img">
                    {/* <Link to={{ pathname:"https://www.w3schools.com/" }} target="_blank" > */}
                    <Link to="/PageIsntAvailable" >
                       <img src={"/work3.png"} alt=""/>
                    </Link>
                </div>

                    <div className="work__img">
                        {/* <Link to={{ pathname:"https://www.w3schools.com/" }} target="_blank" > */}
                        <Link to={{ pathname:"https://flibii-covid-tracker.herokuapp.com" }} target="_blank" >
                           <img src={"/work6.png"} alt=""/>
                        </Link>
                    </div>

                <div className="work__img">
                    <Link to={{ pathname:"https://newflibiistore.web.app" }} target="_blank" >
                       <img src={"/work4.png"} alt=""/>
                    </Link>
                </div>

            <div className="work__img">
                <Link to={{ pathname:"https://flibii-covid-19-tracker.herokuapp.com/" }} target="_blank" >
                   <img src={"/work5.png"} alt=""/>
                </Link>
            </div>

                    <div className="work__img">
                        {/* <Link to={{ pathname:"https://www.w3schools.com/" }} target="_blank" > */}
                        <Link to="/PageIsntAvailable" >
                           <img src={"/svg-3.svg"} alt=""/>
                        </Link>
                    </div>
        </div>
    </section>
    )
}

export default Work
