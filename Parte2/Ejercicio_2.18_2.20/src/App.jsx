import { useEffect, useState } from "react";
import countrieService from "./services/countrie";
import Countries from "./components/countries";

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    countrieService
      .getAll()
      .then(res => setCountries(res))
  }, [])

  const filterCountries =
  search === ""
    ? countries
    : countries.filter(
        (countrie) =>
          countrie.name.common.toLowerCase().includes(search.toLowerCase())
      );

  return(
    <>
      <div>
        find countries
        <input value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      {(countries.length > 0) ? '' : <p>loading, wait please...</p>}
      <Countries filterCountries={filterCountries} />
    </>
  )
};

export default App;
