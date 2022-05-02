import React from 'react'
import './Navbar.css'
import logo from './logo_title.png'
export default function Navbar() {
    const handleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        const visibility = sidebar.getAttribute('data-visible');
        if (visibility === "false") {
            sidebar.setAttribute("data-visible", true);
        }
        else if (visibility === "true") {
            sidebar.setAttribute("data-visible", false);
        }
    }
    return (
        <>
            <nav className="flex-container navbar_dark">
                    <div className="left-content">
                        <i className="fas fa-bars menu-bar" style={{color:"#fff"}} onClick={handleSidebar} ></i>
                        <h1 className='long_h1'><a href="/NewsOrange-React/" className="logo">NewsOrange</a></h1>
                        <img className='short_h1' src={logo} alt="" />
                    </div>
                    <div className="Links">
                        <ul className="nav-link flex-container">
                            <li><a href="/" >Home</a></li>
                            <li><a href="/" >About</a></li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}
