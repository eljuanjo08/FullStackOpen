import React from "react";

const Header = (props) => <h1>{props.course}</h1>;

const Total = ({ part }) => {
  const total = part.reduce((s, p) => s + p)
  return (
  <b>total of {total} exercises</b>)
  ;
};

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>;

const Content = ({ part }) => {
  return (
    <div>
      {part.map(exercise => (
        <Part key={exercise.id} part={exercise.name} exercises={exercise.exercises} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  const part = course.parts.map((part) => part.exercises);
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total part={part} />
    </div>
  );
};

export default Course;