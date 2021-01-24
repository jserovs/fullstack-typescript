import React from 'react';
import './App.css';
import Content from './components/Content';
import { Header } from './components/Header';
import Total from './components/Total';
import { CoursePart } from './types/Course';

const App: React.FC = () => {
  const courseName = "Half Stack application development";


  
  
  
  // this is the new coursePart variable
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    }, 
    {
      name: "OwnInferfaceExtended",
      exerciseCount: 14,
      description: "Confusing description",
    }
  ];

  return (
    <div>

      <Header courseName={courseName}/>
      <Content courseParts={courseParts}/>
      <Total courseParts={courseParts}/>

    </div>
  );
};

export default App;