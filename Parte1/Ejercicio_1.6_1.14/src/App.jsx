import { useState } from 'react';

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

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Declaramos el componente del total de comentarios

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1);
  const setToNeutral = () => setNeutral(neutral + 1);
  const setToBad = () => setBad(bad + 1);
  const total = good + neutral + bad;
  const average = Math.round(((good * 1) + (neutral * 0) + (bad * -1) / 3) * 100) / 1000;
  const positive = Math.round((good / total) * 10000) / 100;
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text='Good' />
      <Button handleClick={setToNeutral} text='Neutral' />
      <Button handleClick={setToBad} text='Bad' />
      <h2>Statistics</h2>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='Total' value={total} />
      <Display text='Average' value={average} />
      <Display text='Positive' value={positive} percentage={true} />
    </div>
  )
}

export default App