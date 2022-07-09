import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar text-white navbar-expand-sm navbar-light bg-dark shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" id="netflix" href="#">
              NETFLIX
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarID"
              aria-controls="navbarID"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarID">
              <div className="navbar-nav">
                <a
                  className="nav-link text-white active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link text-white" aria-current="page" href="#">
                  Tv Shows
                </a>
                <a className="nav-link text-white" aria-current="page" href="#">
                  Movies
                </a>
                <a className="nav-link text-white" aria-current="page" href="#">
                  New & Popular
                </a>
                <a className="nav-link text-white" aria-current="page" href="#">
                  My List
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-nav">
            <a className="nav-link text-white" aria-current="page" href="#">
              Setting
            </a>
            <a className="nav-link text-white" aria-current="page" href="#">
              Notification
            </a>
            <a className="nav-link text-white" aria-current="page" href="#">
              login
            </a>
          </div>
        </nav>
    </>
  )
}

export default Navbar