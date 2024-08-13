import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaWhatsapp, } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";


const Home = ({ show, setShow }) => {
    return (
        <>
            <section className='page homePage'>
                <Navbar show={show} />
                <TbGridDots onClick={() => setShow(!show)} className='hamburger' />





                <div className="banner" data-aos="fade-right" data-aos-duration="1200"
                    data-aos-easing="ease-in-out">
                    <h1>Hi!, I'm Hamza Hussain</h1>
                    <h1></h1>
                    <p>Web Developer</p>
                    <div className="btns">
                        <Link to="https://res.cloudinary.com/dac7qsxar/image/upload/v1722613482/Simple_Resume__page-0001_yszgqu.jpg" target='_blank'><strong>Resume</strong></Link>
                        <Link to="/portfolio"><strong>Portfolio</strong></Link>
                    </div>
                </div >
                <footer >
                    <ul >
                        <Link to={"https://www.instagram.com/hhherbalhairoil/?igsh=MW1pd3BxeGxpaWxtaQ%3D%3D"} target='_blank'>
                            <AiFillInstagram />
                        </Link>
                        <Link to={"https://www.facebook.com/profile.php?id=100026556737986"} target='_blank'>
                            <AiFillFacebook />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/hamza-hussain-0aa2b025a/"} target='_blank'>
                            <AiFillLinkedin />
                        </Link>
                        <Link to={"https://github.com/HamzaHussain123"} target='_blank'>
                            <FaGithubSquare />
                        </Link>
                        <Link to={"https://api.whatsapp.com/send?phone=923323188195"} target='_blank'>
                            <FaWhatsapp />
                        </Link>
                        <Link to={"mailto:hamza.hussain0504@gmail.com"} target='_blank'>
                            <IoIosMail />

                        </Link>

                    </ul>
                    <a className='download-btn' href="/Simple_Resume.pdf" download="Simple_Resume.pdf">
                        Download Resume <span className="download-icon"> <FaDownload />
                        </span>
                    </a>


                </footer>



            </section>

        </>
    )
}

export default Home
