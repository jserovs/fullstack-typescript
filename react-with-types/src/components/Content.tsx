import React from 'react'
import { CoursePart } from '../types/Course'
import Part from './Part'

const Content: React.FC<{courseParts: Array<CoursePart>}> = ({courseParts}) => {
    return (
        <div>
            {courseParts.map((value, index) => {
                return (
                    <div key={index}>
                        <Part coursePart={value}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Content
