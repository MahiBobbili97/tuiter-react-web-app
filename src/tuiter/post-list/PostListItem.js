import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartIcon from '../images/spacex.jpg';
import CartIcon2 from '../images/elon.jpg';
import students from "../images/star.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
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
const [num,changeNum] = useState(post.likes);
const incrementNum = () => {

    if(document.getElementById(post._id ).style.color=='red')
    {changeNum(num-1);
    document.getElementById(post._id ).style.color='gray'
    }
    else
    {changeNum(num+1);
    document.getElementById(post._id).style.color='red'
    }

  }
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

if (post.liked) {
    return(
        <>
         <li className="list-group-item">

         <br/>
                   <div class="row" >

                    <div class="col-1 ps-0 ">
                         <img class="float-left float-start rounded-circle" src={`/images/${post.image}`} height = "45px" width="45px" />
                    </div>
                    <div class="col-11">
                       <div class=" fw-bold">{post.userName} <i class="bi bi-check-circle-fill" style={{color: '#00aaff'}}></i> <span class="text-muted">{post.handle}<i class="bi bi-dot"></i>{post.time} </span> <i className="bi bi-x-lg float-end"
                                                                                                                                                                                                                               onClick={() => deleteTuitHandler(post._id)}></i></div>
                       <div class="">{post.tuit}</div>



                         <ul class="nav   align-items-center nav-justified">
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {post.replies}</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-repeat"></i>  {post.retuits}</a>
                         </li>
                         <li class="nav-item">

                           <a class="nav-link text-muted" href="#" onClick={incrementNum}><i style={{color: 'red'}} class="bi-heart-fill" id={post._id} ></i> {num}</a>


                         </li>
                         <li class="nav-item">
                           <a class="nav-link text-muted " href="#"><i class="bi bi-share"></i> </a>
                         </li>


                    </ul>
                    </div>
                   </div>

                 </li >
                 </>
        );
}
else
    {return(
             <>
              <li className="list-group-item">

              <br/>
                        <div class="row" >

                         <div class="col-1 ps-0 ">
                              <img class="float-left float-start rounded-circle" src={`/images/${post.image}`} height = "45px" width="45px" />
                         </div>
                         <div class="col-11">
                            <div class=" fw-bold">{post.userName} <i class="bi bi-check-circle-fill" style={{color: '#00aaff'}}></i> <span class="text-muted">{post.handle}<i class="bi bi-dot"></i>{post.time} </span> <i className="bi bi-x-lg float-end"
                                                                                                                                                                                                                                    onClick={() => deleteTuitHandler(post._id)}></i></div>
                            <div class="">{post.tuit}</div>



                              <ul class="nav   align-items-center nav-justified">
                              <li class="nav-item">
                                <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {post.replies}</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-repeat"></i>  {post.retuits}</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link text-muted" href="#" onClick={incrementNum}><i style={{color: 'gray'}} class="bi-heart-fill" id={post._id} ></i> {num}</a>

                              </li>

                              <li class="nav-item">
                                <a class="nav-link text-muted " href="#"><i class="bi bi-share"></i> </a>
                              </li>


                         </ul>
                         </div>
                        </div>

                      </li >
                      </>
             );
    }
   };
   function LikeButton() {
     const [isLiked, setIsLiked] = useState(false);
     const [likeCount, setLikeCount] = useState(0);

     const handleLikeClick = () => {
       if (isLiked) {
         setIsLiked(false);
         setLikeCount(likeCount - 1);
       } else {
         setIsLiked(true);
         setLikeCount(likeCount + 1);
       }
     };

     return (
       <div>
         <button onClick={handleLikeClick}>
           <span className={isLiked ? "red-heart" : "empty-heart"}></span>
           Like
         </button>
         <span>{likeCount} likes</span>
       </div>
     );
   }
   export default PostSummaryItem;