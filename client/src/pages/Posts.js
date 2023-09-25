import { useEffect, useState } from "react";
import Loading from "../modules/Loading";
import TableList from "../modules/TableList";

const fetchData = (url) => {
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  //.then((response) => { return response })
  return data;
}

const wait = delay => new Promise(resolve => {
  const timeoutID = setTimeout(resolve, delay);
  console.log("During wait. timeoutID=" + timeoutID);
  return timeoutID;
});

const Posts = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const delay = 1000;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then(() => wait(delay))
      .finally(() => setIsLoading(false));
  }, []);


  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <TableList data={posts} title={<h1>Posts</h1>}></TableList>
    </div>
  );
}

export default Posts;