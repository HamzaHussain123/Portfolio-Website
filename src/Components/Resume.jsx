import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import Skills from "./Sub_Components/Skills"
import Languages from "./Sub_Components/Languages"
import Education from "./Sub_Components/Education"
import Hobbies from "./Sub_Components/Hobbies"

const Resume = ({ show, setShow }) => {
    return (
        <>
            <section className='page resumePage'>
                <Navbar show={show} />
                <TbGridDots onClick={() => setShow(!show)} className='hamburger' />

                <div className="banner">
                    <div className="first-column" data-aos="fade-right" data-aos-duration="1200"
                        data-aos-easing="ease-in-out" >
                        <Skills />
                        <Languages />
                        <div className="personal-skills"  >
                            <h3>PERSONAL SKILLS</h3>
                            <p>Creativity - Team Work - Organization</p>
                        </div>
                    </div>
                    <div className="second-column"  >
                        <Education />


                    </div>
                    <div className="third-column" >
                        <div >
                            <h3>WHat can i do</h3>
                            <p>Web Development - Frontend Development <span>Website Optimization - Problem solving</span><span>Code Debbuging - Project Management</span></p>
                        </div>
                        <div >
                            <h3>ADDITIONAL EXPERTIES</h3>
                            <p>Database Management - Responsive Design <span>Version Control - API Integration</span></p>
                        </div>
                        <div >
                            <h3>HOBBIES AND INTERESTS</h3>
                            <Hobbies />
                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Resume
