import React from 'react'
import './Resume.css'
import ReactToPrint from "react-to-print";
import { Link } from 'react-router-dom';




class ComponentToPrint extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
     
<div className="container">
  <div className="header">
    <div className="full-name">
      <span className="first-name">ANURAG</span> 
      <span className="last-name">DOBHAL</span>
    </div>
    <div className="contact-info">
      <span className="email">Email: 
      <span className="email-val">anuragdobhal99@gmail.com</span>
      </span>
      <span className="separator"></span>
      {/* <br className="break"/> */}
      <span className="phone">Phone: 
      <span className="phone-val">+91 9557230676</span>
      </span>
    </div>
    
    <div className="about">
      <span className="position">Software Engineer </span>
      <br/><br/>
      <span className="desc">I always seeks a dynamic environment where my efforts and skills are an asset. I am self motivated, focused and seeking a successful team-oriented company with opportunity to grow. 
      </span>
    </div>
  </div>
   <div className="details">
   <div className="section">
      <div className="section__title">Education</div>
      <div className="section__list">
        <div className="section__list-item">
        <div className="left">
            <div className="name">New Tehri International School</div>
          </div>
          <div className="right">
            <div className="name">High School</div>
            <div className="desc">2015 - 2016</div>
          </div>
          <br/>  <br/>  
          <div className="left">
          <div className="name">New Tehri International School</div>
          </div>
          <div className="right">
            <div className="name">Intermediate</div>
            <div className="desc">2017 - 2018</div>
          </div>
          <br/>  <br/>  
          <div className="left">
            <div className="name">Graphic Era Hill University</div>
          </div>
          <div className="right">
            <div className="name">Bechlors of Science in Information Technology</div>
            <div className="desc">2018 - 2021</div>
          </div>
          <br/>  <br/>  

          <div className="left">
            <div className="name">Graphic Era Deemed University</div>
          </div>
          <div className="right">
            <div className="name">Masters in Computer Applications</div>
            <div className="desc">2021 - 2023</div>
          </div>
     </div>
    </div>
      
  </div>
    {/* <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">KlowdBox</div>
            <div className="addr">San Fr, CA</div>
            <div className="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div>
        </div>
                <div className="section__list-item">
          <div className="left">
            <div className="name">Akount</div>
            <div className="addr">San Monica, CA</div>
            <div className="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div>
        </div>

      </div>
    </div> */}
{/* 
     <div className="section">
      <div className="section__title">Projects</div> 
       <div className="section__list">
         <div className="section__list-item">
           <div className="name">DSP</div>
           <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
         </div>
         
         <div className="section__list-item">
                    <div className="name">DSP</div>
           <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
           </div>
         </div>
       </div>
    </div> */}
    
       <div className="section__title">Skills</div>
       <div className="skills">
         <div className="skills__item">
           <div className="left"><div className="name">
             Javascript
             </div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>
           </div>
         </div>
       </div>


       <div className="skills__item">
           <div className="left"><div className="name">
             JQuery</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>



         <div className="skills__item">
           <div className="left"><div className="name">
             MERN - Stack</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>

         <div className="skills__item">
           <div className="left"><div className="name">
             HTML5</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>

       <div className="skills__item">
           <div className="left"><div className="name">
             CSS3/Scss</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>

         <div className="skills__item">
           <div className="left"><div className="name">
             BootStap + Tailwind</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>

         <div className="skills__item">
           <div className="left"><div className="name">
             Java</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             DBMS</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
     
     <div className="section">
     
       {/* <div className="section__list">
         <div className="section__list-item">
                Driving & Exploring new places.
         </div>
       </div> */}
    
   <div class="about interest">
            <div class="title2">Interests</div>
            <ul>
                <li><i class="fa fa-book" aria-hidden="true"></i> Reading</li>
                <li><i class="fa fa-microphone" aria-hidden="true"></i> Singing</li>
                <li><i class="fa fa-car" aria-hidden="true"></i> Driving</li>
                <li><i class="fa fa-globe-europe" aria-hidden="true"></i> Exploring places</li>
            
            </ul>
        </div>

     </div>

     </div>
  </div>

    );
  }
}
class MyResume extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() =>
          
          //  <a href="#">Print this out!</a>
           
           <Link to="#">
                     {/* <button className="print_save">Print Resume 
                     <PrintIcon className="print_icon"/>
                     </button> */}


                     <button className="btn_print"><i className="fas fa-print"></i> print Resume</button>
           </Link>
           
           }
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default MyResume;
