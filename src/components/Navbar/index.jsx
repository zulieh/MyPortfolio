import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className= "navbar">
            <div className= "logo">
                <ul className={open ? "nav-links-active" : "nav-links"}>
                    <li className="nav-item">
                        <Link to= "/" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/" className="nav-link" onClick={() => setOpen(false)}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>About</Link>
                    </li>
                    <li className="navbar">
                        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>   
        </nav>
    )
}

export default Navbar
