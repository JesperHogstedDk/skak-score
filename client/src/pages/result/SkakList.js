import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import useFetch, { getUrl } from '../../modules/useFetch';
import TableList from "../../modules/TableList";
import Loading from '../../modules/Loading';

const SkakList = () => {
  //const { skaks } = useFetch('skak');
  //console.log(skaks);

  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //useFetch(url);
    const fetchData = async () => {
      setIsLoading(true);
      //const response = await fetch('http://localhost:10000/skak');
      //const json = await response.json();

      try {
        //await fetchSkak('skak').then((records) => {
        const response = await fetch(getUrl('skak'))
          .then(await new Promise((resolve) =>
            setTimeout(resolve, 1000)));
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //console.log(response);
        const json = await response.json();
        setListing(json);
        setIsLoading(false);
        //console.log(json);

      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }

    };
    fetchData();
  }, []);

  console.log(listing);
  const { skaks } = listing;
  //console.log(skaks);

  if (isLoading)
    return <Loading/>;
  else if (skaks === undefined)
    return <div>Fail to load data!</div>;

  return (
    <TableList
      data={skaks}
      title={<h1>Resultat oversigt</h1>}
      fieldFormatter={{
        turnering: (turnering, dataRow) => [
          <Link
            to={`/result-new/${dataRow.id}`}
            key='1'
          >
            edit
          </Link>,
          <span key="2">
            &nbsp;{
              turnering
            }
          </span>
        ],
        dateCreated: date => new Date(date).toLocaleString()
      }}
    />
  );
};

export default SkakList;