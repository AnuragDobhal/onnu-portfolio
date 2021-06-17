import React from 'react'
import './Skills.css'

function Skills() {
    return (
     <div>
        <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0036c9" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,144C480,107,600,53,720,42.7C840,32,960,64,1080,64C1200,64,1320,32,1380,16L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0036c9" fill-opacity="1" d="M0,288L60,261.3C120,235,240,181,360,165.3C480,149,600,171,720,160C840,149,960,107,1080,80C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0036c9" fill-opacity="1" d="M0,0L60,10.7C120,21,240,43,360,80C480,117,600,171,720,181.3C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg> */}


                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Professional Skills</h2>
                        <p class="skills__text">Programming Languages - C , Java , Python.</p>
                        <p class="skills__text">Web Languages - HTML5 , Css3 , Scss , JavaScript , Mongo-Db , Express-Js , React , Node-Js , GIT .</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
