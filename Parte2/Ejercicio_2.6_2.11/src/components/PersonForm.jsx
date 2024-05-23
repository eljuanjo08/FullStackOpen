import React from "react";
import db from "../services/db";

const PersonForm = ({
  persons,
  setPersons,
  setNewName,
  setNewNumber,
  newName,
  newNumber,
}) => {
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
      db.create(newPerson)
        .then(res => {
          setPersons(persons.concat(res))
        })
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is alredy added to phoneook`);
    }
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleChangePersons} value={newName} name="addPerson"/>
      </div>
      <div>
        number: <input onChange={handleChangeNumbers} value={newNumber} name="addNumber"/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
