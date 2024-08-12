import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {

    const skills = [

        {
            title: "HTML",
            progress: 83
        },
        {
            title: "CSS",
            progress: 80
        },
        {
            title: "Javascript",
            progress: 70
        },
        {
            title: "React",
            progress: 67
        },
        {
            title: "Bootstrap",
            progress: 75
        },
        {
            title: "Tailwind CSS",
            progress: 69
        },
        {
            title: "Node",
            progress: 60
        },
        {
            title: "Express.JS",
            progress: 53
        },
        {
            title: "MongoDB",
            progress: 50
        },

    ]

    return (
        <>
            <div >
                <h3>DEVELOPMENT SKILLS</h3>
                {
                    skills.map((element) => {
                        return (
                            <div key={element.title} className='progressBar'>
                                <p>{element.title}</p>
                                <span>
                                    <FaRegDotCircle style={{ right: `${100 - element.progress}%` }} />
                                </span>


                            </div>
                        )
                    })
                }
            </div>


        </>
    )

}

export default Skills