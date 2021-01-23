import React from 'react'
import { Course } from '../types/Course'

const Content: React.FC<{courseParts: Array<Course>}> = (props) => {
    return (
        <div>
            {props.courseParts.map((value, index) => {
                return (
                    <p key={index}>
                        {value.name} {value.exerciseCount}
                    </p>
                )
            })}
        </div>
    )
}

export default Content
