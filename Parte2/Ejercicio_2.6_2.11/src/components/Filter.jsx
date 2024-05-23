import React, { useEffect } from "react";

const Filter = ({ persons, filterPerson, setFilterPerson, setFilter, filter}) => {
  const filt = persons.filter(
    (person) =>
      person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) != -1
  );
  const personsToShow = filterPerson === "" ? persons : filt;
  
  const handleChangeFilterPersons = (event) => {
    setFilterPerson(event.target.value);
  };
  
  useEffect(()=> {
    setFilter(personsToShow)
  }, [[], filterPerson])

  return (
    <div>
      <input onChange={handleChangeFilterPersons} value={filterPerson} name="filter"/>
    </div>
  );
};

export default Filter;
