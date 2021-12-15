import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className= "navbar">
            <div className= "nav-wrapper">
                <div className= "logo">
                    <ul>
                        <li>
                            <Link to= "/">Home</Link>
                        </li>
                        <li>
                            <Link to= "/">Skills</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
            
        </nav>
    )
}

export default Narbar
