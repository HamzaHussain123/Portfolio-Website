import React from 'react';
import Navbar from './Navbar';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Portfolio = ({ show, setShow }) => {
    const projects = [
        {
            _id: "1",
            title: "Foodies Website",
            tech_stack: "HTML, CSS, BOOTSTRAP, JS",
            Thumbnail: "/web1.jpg",
            projectUrl: "https://react-foodies-website-eight.vercel.app/",
        },
        {
            _id: "2",
            title: "HAMZA ASSOCIATES WEBSITE",
            tech_stack: "HTML, CSS, BOOTSTRAP, JS, REACT",
            Thumbnail: "/web2.jpg",
            projectUrl: "https://hamzaassociates.netlify.app/",
        },
        {
            _id: "3",
            title: "HH-HERBAL'S WEBSITE",
            tech_stack: "HTML, CSS, BOOTSTRAP, REACT, JS",
            Thumbnail: "/web3.jpg",
            projectUrl: "https://hh-herbals.netlify.app/",
        },
    ];

    return (
        <section className="page portfolioPage">
            <Navbar show={show} />
            <TbGridDots onClick={() => setShow(!show)} className='hamburger' />
            <div className="banner">
                <div className="header">
                    <img src="./star.jpeg" alt="star" />
                    <h1>ALL PROJECTS</h1>
                    <img src="./star.jpeg" alt="star" />
                </div>
                <div className="latest-projects">
                    <div className="first-column" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-out">
                        {projects.slice(0, 2).map(element => (
                            <div className="card" key={element._id}>
                                <img src={element.Thumbnail} alt="project-thumbnail" />
                                <div className="card-info">
                                    <span>
                                        <p>{element.tech_stack}</p>
                                        <p>{element.title}</p>
                                    </span>
                                    <Link to={element.projectUrl} target="_blank" rel="noopener noreferrer">
                                        <img src="./arrow.svg" alt="" className='arrow-img' />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="second-column">
                        <div className='header'>
                            <img src="./star.jpeg" alt="" />
                            <h1>ALL PROJECTS</h1>
                            <img src="./star.jpeg" alt="" />
                        </div>
                        <div className="projects" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-out">
                            {projects.slice(2).map(element => (
                                <div className="card" key={element._id}>
                                    <img src={element.Thumbnail} alt="project-thumbnail" />
                                    <div className="card-info">
                                        <span>
                                            <p>{element.tech_stack}</p>
                                            <p>{element.title}</p>
                                        </span>
                                        <Link to={element.projectUrl} target="_blank" rel="noopener noreferrer">
                                            <img src="./arrow.svg" alt="" className='arrow-img' />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
