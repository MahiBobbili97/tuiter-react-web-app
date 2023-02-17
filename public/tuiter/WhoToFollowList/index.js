import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
   return (`
           <ul class="list-group" style="list-style-type: none;">
           <li class="list-group-item">
                               <div class="row">
                                   <span class="fw-bold" >Who to follow</span>
                               </div></li>
           ${
                       who.map(who => {
                          return(WhoToFollowListItem(who));
                       }).join('')
                    }

           </ul>
`); }
export default WhoToFollowList;