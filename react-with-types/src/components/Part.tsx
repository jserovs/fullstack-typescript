import React from 'react'
import { assertNever, CoursePart } from '../types/Course'

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {

    switch (coursePart.name) {
        case "Fundamentals":
            return (
                <div>
                    {coursePart.name} {coursePart.exerciseCount}
                    <p>
                        Description: {coursePart.description}
                    </p>
                </div>

            );

        case "Using props to pass data":
            return (
                <div>
                    {coursePart.name} {coursePart.exerciseCount}
                    <p>Group project count {coursePart.groupProjectCount}
                    </p>
                </div>);

        case "Deeper type usage":
            return (
                <div>
                    {coursePart.name} {coursePart.exerciseCount}
                    <p>
                        Description: {coursePart.description}
                    </p>
                    <p>
                        SubmissionLink: {coursePart.exerciseSubmissionLink}
                    </p>
                </div>);

        case "OwnInferfaceExtended":
            return (
                <div>
                    {coursePart.name} {coursePart.exerciseCount}
                    <p>
                        Description: {coursePart.description}
                    </p>
                </div>
            );

        default:
            return assertNever(coursePart);
    }
};

export default Part