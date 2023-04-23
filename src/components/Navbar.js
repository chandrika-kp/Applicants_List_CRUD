import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-primary bg-opacity-20 " >
        <div className="container-fluid">
          <a className="navbar-brand ps-4 fs-3" href="#a">Applicant_List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5 text-white" >
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/about">About</Link>
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <Link className='btn btn-outline-light mx-3' to="/applicants/add">ADD_Applicant</Link>
      </nav>
    </div>
  );
}
