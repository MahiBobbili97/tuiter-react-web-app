import PostItem from "./PostItem.js";
import post from "./PostItems.js"
const PostList = () => {
   return (`

                       ${
                                              post.map(post => {
                                                 return(PostItem(post));
                                              }).join('')
                                           }

`); }
export default PostItem;