import { useState, useEffect } from "react";

export const getUrl = url => new URL(url, process.env.REACT_APP_URL_API).toString();

function useFetch(url, skip) {
  const [data, setData] = useState({});
  console.log('useFetch: Received Skip=' + skip);
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const fullUrl = getUrl(url);
      console.log('useFetc: Fetching from: ' + fullUrl);
      try {
        const response = await fetch(fullUrl, {
          signal: abortController.signal,
        });

        console.log('useFetch - fetch: ' + response.status + ' ' + response.statusText);

        if (response.status !== 200) {
          alert('Db/api problem?: '+response.status);
        }
        if (response.ok) {
          console.log('useFetch: Response received from server and is ok!')
          const res = await response.json();

          if (abortController.signal.aborted) {
            console.log('useFetch: Abort detected, exiting!')
            return;
          }

          setData(res)
        }
      } catch (e) {
        console.log(e)
      }
    }

    !skip && fetchData();

    return () => {
      console.log('useFetch: Aborting GET request.')
      abortController.abort();
    }
  }, [url, setData, skip])

  return data
}

export default useFetch;