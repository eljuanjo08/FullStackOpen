import { useState } from "react";

const StatisticLine = ({text ,value, percentage = false}) => {
  if (percentage == true) {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
      )
  } else {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
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
  const average = Math.round(((good * 1) + (neutral * 0) + (bad * -1) / 3) * 10) / 100;
  let positive = 0;
  // Utilizamos el operador ternario para cuando no haya valores para good, bad o neutral para poner valor 0 a positive
  good !== 0 && bad !== 0 && neutral !== 0 ? positive = Math.round((good / total) * 10000) / 100 : positive = 0;

  // Renderizamos solo si hay al menos un comentario si no comentario por defecto
  if (good === 0 && bad === 0 && neutral === 0 ) {
    return (
      <>
        <div>No feedback given</div>
      </>
    )
  } else {
    return(
      <>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='Total' value={total} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive} percentage={true} />
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
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}  />
    </div>
  );
};

export default App;
