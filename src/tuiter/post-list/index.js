import React from "react";
import postsArray from './post.json';
import PostSummaryItem
  from "./PostListItem";

const PostList = () => {
 return(
   <ul className="list-group" style={{borderRadius: '20px!important'}}>
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostList;