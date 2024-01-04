import { useState } from "react";

const Button = ({handClick, text}) => <button onClick={handClick}>{text}</button>;

const PopularAnecdote = ({ anecdotes, vote }) => {
  // Utilizamos math.max para encontrar el valor maximo de vote e indexof para obtener su indice
  const mostVotedIndex = vote.indexOf(Math.max(...vote));
  const mostVoted = Math.max(...vote)
  // console.log(mostVoted);
  if (mostVoted === 0) {
    return (
      <div>There is no popular anecdote</div>
    )
  } else {
    return(
      <div>{anecdotes[mostVotedIndex]} votes: {vote[mostVotedIndex]}</div>
    )
  }
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const numeroAleatorio = () => {
    let numAnecdotes = anecdotes.length;
    let numeroAleatorio = Math.floor(Math.random() * numAnecdotes);
    return numeroAleatorio;
  };

  const nextAnecdote = () => {
    setSelected(numeroAleatorio());
  };

  const voted = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} votes: {vote[selected]}
      </div>
      <Button handClick={nextAnecdote} text="next anecdote" />
      <Button handClick={voted} text="vote" />
      <h2>Anecdote with most votes</h2>
      <PopularAnecdote anecdotes={anecdotes} vote={vote} selected={selected} />
    </div>
  );
};

export default App;
