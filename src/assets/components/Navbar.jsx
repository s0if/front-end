import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  me-auto ">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                        </ul>
                        <ul className='d-flex justify-content-end navbar-nav  '>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">signin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">signup</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
