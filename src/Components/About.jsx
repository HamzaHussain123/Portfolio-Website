import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'


const About = ({ show, setShow }) => {
    return (
        <>
            <section className='page aboutPage'>
                <Navbar show={show} />
                <TbGridDots onClick={() => setShow(!show)} className='hamburger' />

                <div className="banner">

                    <div className="content">
                        <div data-aos="fade-right" data-aos-duration="1200"
                            data-aos-easing="ease-in-out" >
                            <h1>ABOUT </h1>
                            <h3>hamza.hussain0504@gmail.com</h3>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1200" >
                            Hello, I'm Hamza Hussain, a dedicated Frontend Developer with a passion for crafting visually striking and user-centric websites. My expertise lies in HTML, CSS, JavaScript, and React, where I blend design aesthetics with functional excellence. I also bring valuable insights into Backend technologies, giving me a holistic approach to web development. {" "}
                            <span>
                                {" "}My true passion is in creating interactive, responsive, and visually compelling digital experiences, all while ensuring seamless data handling and performance optimization. With a strong foundation in Computer Systems Engineering.{" "}

                            </span>
                        </div>
                        <div >
                            <p><strong>Karachi, Pakistan</strong></p>
                            <p>Near Gulshan-e- Iqbal</p>
                        </div>
                    </div>
                    <div className="profileImage" data-aos="fade-left" data-aos-duration="1200"
                        data-aos-easing="ease-in-out" >
                        <img src="/pic_bg.png" alt="profileImage" />
                    </div>
                </div>




            </section>
        </>
    )
}

export default About
