import React from 'react'
import { Course } from '../types/Course'

const Total: React.FC<{courseParts: Array<Course>}> = (props) => {
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
