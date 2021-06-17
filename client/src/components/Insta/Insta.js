import React from 'react'
import { Link } from 'react-router-dom'
import './Insta.css'

function Insta() {
    return (
        <div>
        <section className="skills section" id="skills">
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





