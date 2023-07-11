import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
      
  <div id="notfound">
    <div className="notfound">
        <div className="notfound-404">
            <h1>404</h1>
        </div>
        <h2>This Page Doesn't Exist!</h2>

        <p className="mb-5">
            The page you are accessing for might have been removed
            had its name changed or is temporary available.
        </p>
        <Link to="/">Back to Homepage</Link>
    </div>
  </div>

    </>
  )
}

export default Errorpage
