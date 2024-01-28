import React from "react";
import Person from "./PersonFilter";

const Filter = ({ persons, filterPerson, setFilterPerson}) => {
  const filter = persons.filter(
    (person) =>
      person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) != -1
  );
  const personsToShow = filterPerson === "" ? persons : filter;
  
  const handleChangeFilterPersons = (event) => {
    setFilterPerson(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChangeFilterPersons} value={filterPerson} name="filter"/>
      <Person personsToShow={personsToShow} />
    </div>
  );
};

export default Filter;
