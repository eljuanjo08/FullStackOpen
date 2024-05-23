import personsService from "../services/persons";

const PersonForm = ({
  setNewName,
  setNewPhone,
  newName,
  newPhone,
  persons,
  setPersons,
  setMessage,
  setSmsalerta,
}) => {
  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newPhone,
    };

    if (persons.some((person) => person.name === nameObject.name)) {
      const personFind = persons.find(
        (person) => person.name === nameObject.name
      );
      if (
        confirm(
          `${newName} is already in phonebook, replace the old number with a new one?`
        )
      ) {
        personsService
          .update(personFind.id, nameObject)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.id !== personFind.id ? person : res
              )
            );
            setMessage(`${personFind.name}'s phone updated`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setSmsalerta(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setSmsalerta(null);
            }, 5000);
            setPersons(persons.filter((person) => person.id !== personFind.id));
          });
      }
    } else {
      personsService.create(nameObject).then((res) => {
        setPersons(persons.concat(res));
        setMessage(`Added ${nameObject.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
    setNewName("");
    setNewPhone("");
  };

  return (
    <form onSubmit={addName}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
