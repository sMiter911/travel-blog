import Image from "next/image";
import { forwardRef } from "react";
import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

const Card = forwardRef(({ onClick, href, post }, ref) => {
  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishedAt).toDateString()}</p>
      <img
        className="main-image"
        alt={post.title + " image"}
        src={urlFor(post.mainImage)}
      />
      <hr />
      <div className="info-container">
        <p>Posted by: {post.username}</p>
        <img
          className="avatar"
          alt={post.username + " avatar"}
          src={urlFor(post.authorImage)}
        />
      </div>
      <div className="tag-container">
        {post.categories.map((category) => (
          <Tag title={category.title} key={category.id} />
        ))}
      </div>
    </div>
  );
});
export default Card;
