import React from 'react'
import { CoursePart } from '../types/Course'

const Total: React.FC<{courseParts: Array<CoursePart>}> = (props) => {
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
