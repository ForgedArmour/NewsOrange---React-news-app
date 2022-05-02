import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar(props) {

    const handleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        const visibility = sidebar.getAttribute('data-visible');
        if (visibility === "true") {
            sidebar.setAttribute("data-visible", false);
        }
    }
    return (
        <>
            <div className="sidebar" data-visible="false">
                <div className="side-links">
                    <Link to="/" className={`side`} id={window.location.pathname === "/"?"selected_sidemenu":""} onClick={handleSidebar} >General</Link>
                    <Link to="/technology" className="side" id={window.location.pathname === "/technology"?"selected_sidemenu":""} onClick={handleSidebar} >Technology</Link>
                    <Link to="/Science" onClick={handleSidebar} className="side" id={window.location.pathname === "/Science"?"selected_sidemenu":""}>Science</Link>
                    <Link to="/Sports" onClick={handleSidebar} className="side" id={window.location.pathname === "/Sports"?"selected_sidemenu":""}>Sports</Link>
                    <Link to="/Business" onClick={handleSidebar} className="side" id={window.location.pathname === "/Business"?"selected_sidemenu":""}>Business</Link>
                </div>
            </div>
        </>
    )
}
