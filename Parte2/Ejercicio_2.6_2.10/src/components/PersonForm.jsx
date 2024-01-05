import React from "react";

const PersonForm = ({
  persons,
  setNewName,
  setNewNumber,
  setPersons,
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
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is alredy added to phoneook`);
    }
  };
  return (
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
  );
};

export default PersonForm;
