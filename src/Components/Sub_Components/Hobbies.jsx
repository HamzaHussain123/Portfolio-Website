import React from 'react'
import { FaReadme } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdSportsCricket } from 'react-icons/md'

const Hobbies = () => {
    return (
        <>

            <div className="hobbies">
                <span>
                    <div >
                        <FaReadme />
                        Reading
                    </div>
                    <div >
                        <FaLaptopCode />
                        Coding
                    </div>
                    <div >
                        <CgGym />
                        Exercise
                    </div>
                    <div >
                        <MdSportsCricket />
                        Cricket
                    </div>
                </span>
            </div>

        </>
    )
}

export default Hobbies
