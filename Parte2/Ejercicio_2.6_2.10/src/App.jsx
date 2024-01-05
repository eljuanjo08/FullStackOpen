import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "123-4567-890" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChangePersons = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumbers = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const findPerson = persons.find((person) => person.name === newName);
    if (findPerson === undefined) {
      setPersons(persons.concat(newPerson));
      setNewName("");
    } else {
      alert(`${newName} is alredy added to phoneook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleChangePersons} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumbers} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name} {person.number}</div>
      ))}
    </div>
  );
};

export default App;
