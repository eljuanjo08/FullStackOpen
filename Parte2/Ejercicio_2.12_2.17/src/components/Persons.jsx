import Person from "./Person";
import personsService from "../services/persons";

const Persons = ({ persons, search, setPersons }) => {
  const showAll =
    search === ""
      ? persons
      : persons.filter(
          (person) =>
            person.name.toLowerCase().includes(search.toLowerCase()) ||
            person.number.includes(search)
        );

  const deletePerson = (id, name) => {
    if (confirm(`Delete ${name}`)) {
      personsService
        .destroy(id)
          .then(setPersons(persons.filter((person) => person.id !== id)))
    } else {
      alert("Delete abort");
    }
  };
  return (
    <>
      {showAll.map((person) => (
        <Person
          key={person.id}
          person={person}
          deletePerson={() => deletePerson(person.id, person.name)}
        />
      ))}
    </>
  );
};

export default Persons;
