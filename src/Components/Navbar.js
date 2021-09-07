import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="flex-container">
                    <div className="left-content">
                        <h1><a href="/NewsOrange-React/" className="logo">NewsOrange</a></h1>
                    </div>
                    <div className="Links">
                        <ul className="nav-link flex-container">
                            <li><a href="/" >Home</a></li>
                            <li><a href="/" >About</a></li>
                            <li><a href="/" >Services</a></li>
                        </ul>
                    </div>

                    <div className="right-content flex-container">
                        <input type="text" placeholder="Search" />
                        <button className="btn-search">Search</button>
                    </div>
                </nav>
        </>
    )
}
