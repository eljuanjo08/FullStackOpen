import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState("");

  /* To perform the filter we use the filter() method to filter only when the condition is met, for the condition we convert the names and the input data to lower case and with the indexOf() method we return the index when we find a match with the names and omit those that do not match with != 1. */

  const filter = persons.filter(
    (person) =>
      person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) != -1
  );

  const personsToShow = filterPerson === "" ? persons : filter;

    const handleChangeFilterPersons = (event) => {
      setFilterPerson(event.target.value);
    };

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
      number: newNumber,
    };

    const findPerson = persons.find((person) => person.name === newName);
    if (findPerson === undefined) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is alredy added to phoneook`);
    }

  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with{" "}
        <input onChange={handleChangeFilterPersons} value={filterPerson} />
      </div>
      <h2>add a new</h2>
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
      {personsToShow.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
