import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChangeNumbers = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    }

    const findPerson = persons.find(person => person.name === newName);
    if (findPerson === undefined) {
      setPersons(persons.concat(newPerson));
      setNewName("");
    } else {
      alert(`${newName} is alredy added to phoneook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleChangeNumbers} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
