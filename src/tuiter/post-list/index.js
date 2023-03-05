import React from "react";
import postsArray from './post.json';
import PostSummaryItem
  from "./PostListItem";

const PostSummaryList = () => {
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;