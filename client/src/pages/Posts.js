//import { useEffect, useState } from "react";
import Loading from "../modules/Loading";
import FetchData from "../modules/FetchData";
import TableList from "../modules/TableList";



const Posts = () => {

  /*
  /posts	100 posts
  /comments	500 comments
  /albums	100 albums
  /photos	5000 photos
  /todos	200 todos
  /users	10 users
  */
  const resourceUrl = "posts";
  const url = 'https://jsonplaceholder.typicode.com/' + resourceUrl;
  console.log(url);
  const [posts, isLoading] = FetchData(url);

  //console.log(posts);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <TableList data={posts} title={<h1>{resourceUrl}</h1>}></TableList>
    </div>
  );
}

export default Posts;