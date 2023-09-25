import { useEffect, useState } from "react";

const wait = delay => new Promise(resolve => {
  const timeoutID = setTimeout(resolve, delay);
  console.log("During wait. timeoutID=" + timeoutID);
  return timeoutID;
});


const FetchData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  console.log(url);
  useEffect(() => {
    setIsLoading(true);

    const delay = 500;

    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then(() => wait(delay))
      .finally(() => setIsLoading(false));
  }, []);

  return [posts, isLoading];
}

export default FetchData;