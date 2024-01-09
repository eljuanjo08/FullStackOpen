import axios from "axios";
import CountriesDisplay from './components/CountriesDisplay'
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countrieFilter, setCountrieFilter] = useState("");

  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      console.log(res.data);
    });
  };
  useEffect(hook, []);

  const handleChange = (event) => {
    setCountrieFilter(event.target.value);
  };

  const searchCountry = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(countrieFilter.toLowerCase()) !=
      -1
  );

  return (
    <>
      <div>
        find countries{" "}
        <input
          type="text"
          onChange={handleChange}
          placeholder="search country"
        />
      </div>
      <CountriesDisplay searchCountry={searchCountry} />
    </>
  );
};

export default App;
