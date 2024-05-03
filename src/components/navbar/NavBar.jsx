import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";
import NavMobile from "./navbarMobile/NavMobile";

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState(""); // État pour suivre la section active

    useEffect(() => {
        // Fonction de gestion d'événements de scroll
        const handleScroll = () => {
            // Obtenir la position de défilement actuelle
            const scrollY = window.scrollY;

            // Déterminer la section active en fonction de la position de défilement
            const homeOffset = document.getElementById("home").offsetTop;
            const aboutOffset = document.getElementById("about").offsetTop;
            const skillsOffset = document.getElementById("skills").offsetTop;
            const contactOffset = document.getElementById("contact").offsetTop;
            const projectOffset = document.getElementById("project").offsetTop;

            if (scrollY < aboutOffset) {
                setActiveSection("home");
            } else if (scrollY >= aboutOffset && scrollY < skillsOffset) {
                setActiveSection("about");
            } else if (scrollY >= skillsOffset && scrollY < projectOffset) {
                setActiveSection("skills");
            }else if(scrollY >= projectOffset && scrollY < contactOffset){
                setActiveSection("project");
            }else {
                setActiveSection("contact");
            }
        };

        // Ajouter un gestionnaire d'événements de scroll à la fenêtre
        window.addEventListener("scroll", handleScroll);

        // Nettoyer le gestionnaire d'événements lors du démontage du composant
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Effectue l'effet uniquement après le premier rendu

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <div>
            <NavMobile isOpen={openMenu} toggleMenu={toggleMenu} />
            <div className="nav-wrapper">
                <div className="nav-content">
                    <div className="logo">Kimou Dev</div>
                    <ul>
                        <li>
                            <a href="#home" className={activeSection === "home" ? "menu-item active" : "menu-item"}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={activeSection === "about" ? "menu-item active" : "menu-item"}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className={activeSection === "skills" ? "menu-item active" : "menu-item"}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#project" className={activeSection === "project" ? "menu-item active" : "menu-item"}>
                                My projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={activeSection === "contact" ? "menu-item active" : "menu-item"}>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <svg
                            className="hamburger"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
