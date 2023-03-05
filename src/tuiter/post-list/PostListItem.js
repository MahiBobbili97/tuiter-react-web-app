import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartIcon from '../images/spacex.png';
import CartIcon2 from '../images/elon.jpg';
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "Tesla.png"
   }
    }
   ) => {
   if (post.retweet === "") {
    return(
    <>
     <ul >
               <div class="row" >
                <div class="col-1 ps-0 ">
                     <img class="float-left float-start rounded-circle" src={CartIcon1} height = "45px" width="45px" />
                </div>
                <div class="col-11">
                   <div class=" fw-bold">{post.userName} <i class="fa-solid fa-circle-check"></i> <span class="text-muted"> {post.handle} - {post.time} </span> </div>
                   <div class="">{post.comment}</div>

                         <div class="mt-2 border border-secondary rounded">

                         <li className="list-group-item">
                               <div className="row">
                               <div class="col-1 ps-0 ">
                                                    <img class="float-left float-start rounded-circle" src={post.displayImage} height = "45px" width="45px" />
                                               </div>
                                 <div className="col-10">
                                   <div>{post.userName_1} . {post.time_1}</div>
                                   <div>{post.comment_1}</div>
                                 </div>

                               </div>
                              </li>

                         </div>
                         <br/>

                     <ul class="nav   align-items-center nav-justified">
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="fa-regular fa-comment"></i>  {post.comments}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="fa-solid fa-retweet"></i>  {post.retweets}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="fa-regular fa-heart"></i> {post.likes}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted " href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i> </a>
                     </li>


                </ul>
                </div>
               </div>
             </ul>
             </>
    );
    }
    else
    {
    return(
        <>
         <ul >
                   <div class="row" >
                    <div class="col-1 ps-0 ">
                         <img class="float-left float-start rounded-circle" src={CartIcon2} height = "45px" width="45px" />
                    </div>
                    <div class="col-11">
                       <div class=" fw-bold">{post.userName} <i class="fa-solid fa-circle-check"></i> <span class="text-muted"> {post.handle} - {post.time} </span> </div>
                       <div class="">{post.comment}</div>

                             <div class="mt-2 border border-secondary rounded">

                             <img class=" w-100 border-bottom border-secondary rounded " src={post.image}  height = "340px" />

                             </div>
                             <br/>

                         <ul class="nav   align-items-center nav-justified">
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="fa-regular fa-comment"></i>  {post.comments}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="fa-solid fa-retweet"></i>  {post.retweets}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="fa-regular fa-heart"></i> {post.likes}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted " href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i> </a>
                         </li>


                    </ul>
                    </div>
                   </div>
                 </ul>
                 </>
        );
    }
   };
   export default PostSummaryItem;