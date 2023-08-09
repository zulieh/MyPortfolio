import { useState } from 'react'
import { Link } from "react-router-dom"
import './style.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className= "navbar">
            <Link to= "/" className= "logo hover:bg-black" onClick={() => setOpen(false)}>
                ZD
            </Link>
                <ul className={open ? "nav-links-active" : "nav-links"}>
                    <li className="nav-item">
                        <Link to= "/" className="nav-link" onClick={() => setOpen(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Work" className="nav-link" onClick={() => setOpen(false)}>Work</Link>
                    </li>
                    <li className="navbar">
                        <Link to="/Contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>
            
        </nav>
    )
}

export default Navbar
