import { useState } from "react";

const Display = ({text ,value, percentage = false}) => {
  if (percentage == true) {
    return(
      <div>{text}: {value}%</div>
      )
  } else {
    return(
      <div>{text}: {value}</div>
      )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Declaramos el componente de las estadisticas
const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad;
  // Funcion para rendondear a centesimas
  const average = Math.round(((good * 1) + (neutral * 0) + (bad * -1) / 3) * 100) / 1000;
  let positive = 0;
  // Utilizamos el operador ternario para cuando no haya valores para good, bad o neutral para poner valor 0 a positive
  good !== 0 && bad !== 0 && neutral !== 0 ? positive = Math.round((good / total) * 10000) / 100 : positive = 0;

  // Renderizamos solo si hay al menos un comentario si no comentario por defecto
  if (good === 0 && bad === 0 && neutral === 0 ) {
    return (
      <>
        <h2>Statistics</h2>
        <div>No feedback given</div>
      </>
    )
  } else {
    return(
      <>
        <h2>Statistics</h2>
        <Display text='good' value={good} />
        <Display text='neutral' value={neutral} />
        <Display text='bad' value={bad} />
        <Display text='Total' value={total} />
        <Display text='Average' value={average} />
        <Display text='Positive' value={positive} percentage={true} />
      </>
    )
  }
}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => setGood(good + 1);
  const setToNeutral = () => setNeutral(neutral + 1);
  const setToBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text="Good" />
      <Button handleClick={setToNeutral} text="Neutral" />
      <Button handleClick={setToBad} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral}  />
    </div>
  );
};

export default App;
