import { useEffect, useState } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import Alert from "./components/Alert";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [smsalerta, setSmsalerta] = useState(null);  // Corrección aquí

  useEffect(() => {
    personsService.getAll().then((res) => setPersons(res));
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Alert smsalerta={smsalerta} />
      <Filter search={search} setSearch={setSearch} />
      <h3>Add a new</h3>
      <PersonForm
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        newName={newName}
        newPhone={newPhone}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setSmsalerta={setSmsalerta}  // Corrección aquí
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} setPersons={setPersons} setMessage={setMessage} />
    </>
  );
};

export default App;
