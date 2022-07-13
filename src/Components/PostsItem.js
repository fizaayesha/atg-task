import React from "react";

function PostsItem({
  image,
  type,
  heading,
  desc,
  person,
  views,
  date,
  location,
  button,
}) {
  return (
    <div className="blogItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <p> {type} </p>
      <h2> {heading} </h2>
      <h4> {desc} </h4>
      <p>{person}</p>
      <p>{views}</p>
      <p>{date}</p>
      <p>{location}</p>
      <button>{button}</button>
    </div>
  );
}

export default PostsItem;
