import React from "react";
import "./navmobile.css";

function NavMobile({ isOpen, toggleMenu }) { // destructuring props
    return (
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="close"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
                {/* <div className="logo">Kimou Dev</div> */}
                <ul>
                    <li>
                        <a href="#home" className="menu-item">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#project" className="menu-item">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="menu-item">
                            Contact Me
                        </a>
                    </li>
                    {/* <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button> */}
                </ul>
            </div>
        </div>
    );
}

export default NavMobile;
