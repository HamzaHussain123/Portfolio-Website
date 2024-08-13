import React from 'react'
import { Link } from "react-router-dom"
import { CiMobile3 } from "react-icons/ci"

const Navbar = ({ show, setShow }) => {

    const handleLinkClick = () => {
        setShow(false); // Close the navbar
    };

    return (
        <>
            <nav className={show ? 'nav mobile-nav' : 'nav'}>
                <ul>
                    <Link to={"/"} onClick={handleLinkClick}>Home</Link>
                    <Link to={"/about"} onClick={handleLinkClick}>About</Link>
                    <Link to={"/resume"} onClick={handleLinkClick}>Resume</Link>
                    <Link to={"/portfolio"} onClick={handleLinkClick}>Projects</Link>
                </ul>



                <div className="phone">
                    <CiMobile3 />
                    <span>
                        0332-3188195
                    </span>

                </div>


            </nav>





        </>
    )
}



export default Navbar
