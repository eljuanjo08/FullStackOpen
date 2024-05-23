import { useState } from "react";
import Weather from "./Weather";

const Countries = ({ filterCountries }) => {
  const all = filterCountries;
  const long = filterCountries.length;
  const [showCountry, setShowCountry] = useState(
    all.reduce((acc, country) => {
      acc[country.name.common] = false;
      return acc;
    }, {})
  );

  const upgradeState = (countryName) => {
    setShowCountry((prevState) => ({
      ...prevState,
      [countryName]: !prevState[countryName],
    }));
  };

  if (long != 0) {
    if (long <= 1) {
      return all.map((c) => (
        <div key={c.name.common}>
          <h1>{c.name.common}</h1>
          <p>Capital: {c.capital}</p>
          <p>area: {c.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(c.languages).map((lan) => (
              <li key={lan}>{lan}</li>
            ))}
          </ul>
          <img src={c.flags.svg} height={200} />
          <Weather capital={c.capital} />
        </div>
      ));
    } else if (long <= 10) {
      return all.map((c) => (
        <div key={c.name.common}>
          {c.name.common}
          <button
            onClick={() => {
              upgradeState(c.name.common);
            }}
          >
            {showCountry[c.name.common] ? "ocultar" : "mostrar"}
          </button>
          {showCountry[c.name.common] ? (
              <>
                <h1>{c.name.common}</h1>
                <p>Capital: {c.capital}</p>
                <p>area: {c.area}</p>
                <h2>Languages</h2>
                <ul>
                  {Object.values(c.languages).map((lan) => (
                    <li key={lan}>{lan}</li>
                  ))}
                </ul>
                <img src={c.flags.svg} height={200} />
              </>
            ) : null}
        </div>
      ));
    } else {
      return( <p>Too many matches, specify another filter</p> )
    }
  }
};

export default Countries;
