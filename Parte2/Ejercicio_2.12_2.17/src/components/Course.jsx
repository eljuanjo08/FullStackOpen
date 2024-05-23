const Header = ({ course }) => <h1>{course.name}</h1>;
const Part = ({ part }) => {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
};
const Content = ({ course }) => {
  return course.parts.map((part) => <Part key={part.id} part={part} />);
};
const Total = ({course}) => {
  let nums = [] 
  course.parts.map(part =>
  nums.push(part.exercises))
  const total = nums.reduce((s,p) => s+p)
  return(
    <b>Total of {total} exercises</b>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;