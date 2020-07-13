/* eslint-disable react/prop-types */
import React from "react";

const customStyle = {
  border: "1px solid black",
  color: "blue",
  fontSize: "15px",
};

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  customStyle.fontSize = "20px";

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3 className="heading">{post.title}</h3>
      <p style={customStyle}>{post.content}</p>
      <img className="fruit-image" src={post.imgUrl} alt={post.imgAlt} />
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Blog;
