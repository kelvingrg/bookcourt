import React from 'react'
import './Navbar.css'

function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-md">
    <div className="container-fluid">
      <button className="navbar-toggler toggle-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse h-100" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto  mb-md-0 d-flex h-100">
          <li className="nav-item pointer">
           Home
          </li>
          <li className="nav-item">
      Link
          </li>
          <li className="nav-item">
            Disabled
          </li>
        </ul>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          user
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar