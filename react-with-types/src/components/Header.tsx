import React from 'react'

export const Header = (props: { courseName: String }) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}
