const Header = (props) => <h1>{props.course}</h1>;

const Total = ({ part }) => {
  const total = part.reduce((s, p) => s + p)
  return (
  <b>Number of exercises {total}</b>)
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

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },{
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ],
  };

  return <Course course={course} />;
};

export default App;
