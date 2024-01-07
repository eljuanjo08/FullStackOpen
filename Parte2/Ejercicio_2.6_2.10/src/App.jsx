import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/PersonFilter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const hook = () => {
    axios
      .get(" http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        filterPerson={filterPerson}
        setFilterPerson={setFilterPerson}
      />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Person personsToShow={persons} />
    </div>
  );
};

export default App;
