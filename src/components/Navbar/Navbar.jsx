import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import './Navbar.css'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };



    return (
        <>

        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            

            <nav className="nav-wrapper">
                <div className="nav-content">
                <a className="futuristic-text">Miguel Ospina</a>
                    {/* <img className="logo" src="" alt="" /> */}
                    

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

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8 rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar; 