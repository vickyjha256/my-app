import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    // This is for dark mode. We are using backticks so we can use template literals [Syntax: ${ }] inside a string.
    <div className="my-2">
      {/* // <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Text Converter</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link active" href="/about">{props.about}</a>
              </li> */}
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Type href Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form> */}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</b> </label>
            </div>

          </div>
        </div>

      </nav>
    </div>
  )
}
Navbar.defaultProps = {
  about: 'About text here'
};
Navbar.propTypes = { about: PropTypes.string };