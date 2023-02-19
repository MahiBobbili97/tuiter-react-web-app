import PostItem from "./PostItem.js";
import PostItems from "./PostItems.js"
const PostList = () => {
   return (`

                       ${
                                              PostItems.map(PostItems => {
                                                 return(PostItem(PostItems));
                                              }).join('')
                                           }

`); }
export default PostItem;