import React from "react";
import { PostsList } from "../data/PostsLists";
import PostsItem from "./PostsItem";
import "./posts.css";
function Posts() {
  return (
    <div className="blog">
      <div className="blogList">
        {PostsList.map((blogItem, key) => {
          return (
            <PostsItem
              key={key}
              image={blogItem.image}
              type={blogItem.type}
              heading={blogItem.heading}
              desc={blogItem.desc}
              person={blogItem.person}
              views={blogItem.views}
              date={blogItem.date}
              location={blogItem.location}
              button={blogItem.button}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
