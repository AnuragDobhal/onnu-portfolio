import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
              <footer className="footer">
                  <Link to="./">
                     <p className="footer__title">ANURAG</p>
                  </Link>
            <div className="footer__social">
            <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank">
            <div className="footer__icon">
                <i className='fab fa-github'/>
            </div>
        </Link>
        <Link to={{ pathname:"https://instagream.com/anurag_dobhal_/" }} target="_blank">
                    <div className="footer__icon">
                    <i className="fab fa-instagram"/>
                    </div>
                </Link>
                <Link to={{ pathname:"https://www.linkedin.com/in/anurag-dobhal-4ba5b1204/" }} target="_blank" >
            <div className="footer__icon">
            <i className="fab fa-linkedin-in"/>
            </div>
        </Link>
        </div>
            <p>&#169; 2021-2025 copyright all right reserved</p>
        </footer>
        </div>
    )
}

export default Footer
