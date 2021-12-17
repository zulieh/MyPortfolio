import { useState } from 'react'
import { Link } from "react-router-dom"
import './style.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className= "navbar">
            <div className= "logo">
                <ul className={open ? "nav-links-active" : "nav-links"}>
                    <li className="nav-item">
                        <Link to= "/Home" className="nav-link" onClick={() => setOpen(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/Skills" className="nav-link" onClick={() => setOpen(false)}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Work" className="nav-link" onClick={() => setOpen(false)}>Work</Link>
                    </li>
                    <li className="navbar">
                        <Link to="/Contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>   
        </nav>
    )
}

export default Navbar
