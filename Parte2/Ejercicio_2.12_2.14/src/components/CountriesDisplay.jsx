import { useState } from "react";

const CountriesDisplay = ({ searchCountry }) => {
  const [showDates, setShowDates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  if (searchCountry.length === 1) {
    return (
      <div>
        {searchCountry.map((country) => (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <img src={country.flags.png} width="100" />
            <h2>Languages</h2>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  } else if (searchCountry.length <= 5 && searchCountry.length != 0) {
    return (
      <>
        {searchCountry.map((country, index) => (
          <div key={country.name.common}>
            <div>
              {`${country.name.common} `}
              <button
                onClick={() => {
                  const copy = [...showDates];
                  copy[index] ? (copy[index] = false) : (copy[index] = true);
                  setShowDates(copy);
                }}
              >
                {showDates[index] ? "hide" : "show"}
              </button>
              {showDates[index] && (
                <>
                  <h1>{country.name.common}</h1>
                  <div>Capital: {country.capital}</div>
                  <div>Population: {country.population}</div>
                  <img src={country.flags.png} width="100" />
                  <h2>Languages</h2>
                  <ul>
                    {Object.values(country.languages).map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default CountriesDisplay;
