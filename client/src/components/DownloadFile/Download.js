import React from 'react'
import { Link } from 'react-router-dom'
import './Down.css'

function Download() {
    return (
<div className="fabb-container">
		<div className="fabb fabb-icon-holder">
    <i className="fas fa-cloud-download-alt"></i>
		</div>
		<ul className="fabb-options">
			<li>
				<span className="fabb-label">My Resume &#8594;</span>
				<div className="fabb-icon-holder">

        {/* <a className="file" href="MyResume.pdf" download>
        <i className="far fa-file"></i>
        </a> */}

		<Link to="./resume">
		{/* <a className="file"> */}
        <i className="far fa-file"></i>
        {/* </a> */}
                  </Link>

				</div>
			</li>
		</ul>
	</div>  
    )
}

export default Download










      /* <a href="ANURAG_RESUME_WEB.pdf" download>  */


















