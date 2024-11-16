import React from "react";
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="" alt="" />

                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact me</a>
                        </li>

                        <button className="contact-btn" onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>

                    <button class="menu-btn" onClick={() => { }}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8 rem" }}
                        >
                            menu
                        </span>
                    </button>


                </div>
            </nav>
        </>
    )
}

export default Navbar 