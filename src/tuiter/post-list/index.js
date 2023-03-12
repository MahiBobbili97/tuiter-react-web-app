import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
  from "./PostListItem";

const PostList = () => {
const postsArray = useSelector(
                    (state) => state.tuits);
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