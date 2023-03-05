import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartIcon from '../images/spacex.jpg';
import CartIcon2 from '../images/elon.jpg';
import students from "../images/star.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
     <li className="list-group-item">
               <div class="row" >
                <div class="col-1 ps-0 ">
                     <img class="float-left float-start rounded-circle" src={CartIcon2} height = "45px" width="45px" />
                </div>
                <div class="col-11">
                   <div class=" fw-bold">{post.userName} <i class="bi bi-check-circle-fill" style={{color: '#00bfff'}}></i> <span class="text-muted"> {post.handle} - {post.time} </span> </div>
                   <div class="">{post.comment}</div>

                         <div class="mt-1 border border-secondary rounded">

                         <li className="list-group-item">
                               <div className="row">
                               <div class="col-1 ps-0 ">
                                                    <img class="float-left float-start rounded-circle" src={CartIcon} height = "45px" width="45px" />
                                               </div>
                                 <div className="col-10">
                                   <div class=" fw-bold">{post.userName_1} <i class="bi bi-check-circle-fill" style={{color: '#00bfff'}}></i> <span class="text-muted"> {post.handle_1} - {post.time_1} </span> </div>
                                   <div>{post.comment_1}</div>
                                 </div>

                               </div>
                              </li>

                         </div>
                         <br/>

                     <ul class="nav   align-items-center nav-justified">
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {post.comments}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-down-up"></i>{post.retweets}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted" href="#"><i class="bi bi-heart"></i>  {post.likes}</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link text-muted " href="#"><i class="bi bi-box-arrow-up"></i> </a>
                     </li>


                </ul>
                </div>
               </div>
             </li>
             </>
    );
    }
    else
    {
    return(
        <>
         <li className="list-group-item">
         <span class="text-muted" style={{marginLeft: '23px'}}><i class="bi bi-arrow-down-up"></i> Elon Musk Retweeted</span>
         <br/>
                   <div class="row" >

                    <div class="col-1 ps-0 ">
                         <img class="float-left float-start rounded-circle" src={CartIcon} height = "45px" width="45px" />
                    </div>
                    <div class="col-11">
                       <div class=" fw-bold">{post.userName} <i class="bi bi-check-circle-fill" style={{color: '#00bfff'}}></i> <span class="text-muted"> {post.handle} - {post.time} </span> </div>
                       <div class="">{post.comment}</div>

                             <div class="mt-2 border border-secondary rounded">

                             <img class=" w-100 border-bottom border-secondary rounded " src={students}  height = "340px" />

                             </div>
                             <br/>

                         <ul class="nav   align-items-center nav-justified">
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {post.comments}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-down-up"></i>  {post.retweets}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="bi bi-heart"></i> {post.likes}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted " href="#"><i class="bi bi-box-arrow-up"></i> </a>
                         </li>


                    </ul>
                    </div>
                   </div>
                   <span style={{marginLeft: '53px',color:'#00bfff'}}>Show this thread</span>
                 </li >
                 </>
        );
    }
   };
   export default PostSummaryItem;