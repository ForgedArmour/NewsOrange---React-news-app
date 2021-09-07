import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar(props) {

    const handleFun = ()=>{
        // props.setBg("tr");
    }
    return (
        <>
            <div className="sidebar">
                <div className="side-links">
                    <Link to="/" className={`side`}>General</Link>
                    <Link to="/technology" className="side">Technology</Link>
                    <Link to="/Science" onClick={handleFun} className="side">Science</Link>
                    <Link to="/Sports" onClick={handleFun} className="side">Sports</Link>
                    <Link to="/Business" onClick={handleFun} className="side">Business</Link>
                </div>
            </div>
        </>
    )
}
