import PostListItem from "./PostListItem.js";
import posts from "./posts.js"
const PostList = () => {
   return (`

                       ${
                                              posts.map(posts1 => {
                                                 return(PostListItem(posts1));
                                              }).join('')
                                           }

`); }
export default PostList;