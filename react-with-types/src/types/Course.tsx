// export interface Course {
//     name: string,
//     exerciseCount: number
// }

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CourseOwnPart;

export interface newInterface extends CoursePartBase {
    description: string;
}

export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

export interface CoursePartOne extends newInterface {
    name: "Fundamentals";
}

export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}

export interface CoursePartThree extends newInterface {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}

export interface CourseOwnPart extends newInterface {
    name: "OwnInferfaceExtended";
    exerciseCount: number;
}

export const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };