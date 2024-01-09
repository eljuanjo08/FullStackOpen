import axios from "axios";
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

  if (searchCountry.length === 1) {
    return (
      <div>
        <div>
          find countries{" "}
          <input
            type="text"
            onChange={handleChange}
            placeholder="search country"
          />
          {searchCountry.map((country) => (
            <>
              <h1 key={country.name.common}>{country.name.common}</h1>
              <div key={country.name.common}>Capital: {country.capital}</div>
              <div key={country.name.common}>
                Population: {country.population}
              </div>
              <img
                key={country.name.common}
                src={country.flags.png}
                width="100"
              />
              <h2 key={country.name}>Languages</h2>
              <ul key={country.name}>
                {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    );
  } else if (searchCountry.length <= 10 && searchCountry.length != 0) {
    return (
      <div>
        <div>
          find countries{" "}
          <input
            type="text"
            onChange={handleChange}
            placeholder="search country"
          />
          {searchCountry.map((country) => (
            <>
              <div key={country.name.common}>{country.name.common}</div>
            </>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          find countries{" "}
          <input
            type="text"
            onChange={handleChange}
            placeholder="search country"
          />
          <div>Too many matches, specify another filter</div>
        </div>
      </div>
    );
  }
};

export default App;
