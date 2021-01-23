import React from 'react'
import { Course } from '../types/Course'

const Content = (props: {courseParts: Array<Course>}) => {
    return (
        <div>
            {props.courseParts.map((value, index) => {
                return (
                    <p>
                        {value.name} {value.exerciseCount}
                    </p>
                )
            })}
        </div>
    )
}

export default Content
