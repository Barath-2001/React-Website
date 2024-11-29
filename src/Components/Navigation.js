import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../Images/Logo1.png";
import { Link as Links } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <a href="/"><img alt="Logo" src={logo} height="70px" width="auto" style={{bottom:`-90px`}}/></a>

            <nav ref={navRef} style={{fontSize:`1.5rem`}}>
                <HashLink to="/#blog" offset={80} onClick={showNavbar}>Home</HashLink>
                <Links to="/Services" onClick={showNavbar}> Services</Links>
                <HashLink to="/#blog" onClick={showNavbar}>Blog</HashLink>
                <HashLink to="/#about" offset={80} onClick={showNavbar}>About us</HashLink>
                <HashLink to="/#contact" offset={80} onClick={showNavbar}>Contact</HashLink>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;