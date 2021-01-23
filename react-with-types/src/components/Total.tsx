import React from 'react'
import { Course } from '../types/Course'

const Total  = (props: {courseParts: Array<Course>}) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </div>
    )
}

export default Total
