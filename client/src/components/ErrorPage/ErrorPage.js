import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function ErrorPage() {
    return (
      
            <div className="con">
            <h1 className="error">ERROR 404 !</h1>
                <p className="go_back">Oops! Something went wrong.</p>
                <Link to="/">
                   <p className="initial_page">Go back to initial page.</p>
                </Link>
            </div>
         

    )
}

export default ErrorPage





