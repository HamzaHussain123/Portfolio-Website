import React from 'react'

const Education = () => {
    const education = [
        {
            _id: "1",
            title: "Matriculation:",
            description: "Chiniot Islamia Public School (2007 - 2020)",
            Percentage: "Percentage: 90%"


        },
        {
            _id: "2",
            title: "Intermediate",
            description: "Adamjee Govt Science College (2020 - 2022)",
            Percentage: "Percentage: 90.2%"

        },
        {
            _id: "3",
            title: "Undergraduate",
            description: "NED University of Engineering & Technology (2022 - Present)",
            Percentage: "CGPA: 3.68"

        },
    ]
    return (
        <>
            <div className="education_component" ></div>
            <h3>EDUCATION</h3>
            {
                education.map(element => {
                    return (


                        <div className="education" key={element._id}>
                            <p>{element.title}</p>
                            <p>{element.description}</p>
                            <p>{element.Percentage}</p>

                        </div>
                    )
                })

            }
        </>
    )
}

export default Education
