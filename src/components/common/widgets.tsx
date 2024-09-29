import React from "react";

import PostCard from "./post-card";

export default function Widget() {
  const posts = [
    {
      title: "New Users",
      content: "215",
    },
    {
      title: "Last 7 days user",
      content: "264",
    },
    {
      title: "1 Month active users",
      content: "123",
    },
    {
      title: "1 year active users",
      content: "96",
    },
    {
      title: "Users growth",
      content: "15.00%",
    },
  ];
  return (
    <>
      <div className="font-body">
        <div className="flex">
          <span>Users</span>
        </div>
        <br />
        <div className="flex grid gap-2 lg:grid-cols-5">
          {posts.map((items, key) => (
            <PostCard title={items.title} content={items.content} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}
