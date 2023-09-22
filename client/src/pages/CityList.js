import React, { useState, useEffect } from 'react';

// Dette er en funktion, der returnerer en Promise, som efterligner en netværksanmodning
function fetchCities() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Copenhagen', 'Aarhus', 'Odense']), 2000);
  });
}

function CityList() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCities().then((records) => {
      setData(records);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading cities...</div>;

  return (
    <ul>
      {data.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CityList />
    </React.Suspense>
  );
}

export default App;
