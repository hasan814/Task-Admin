"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const ListPage = () => {
  const { data, isLoading, isError } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {data.map((post: any) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
