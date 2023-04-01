import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartIcon from '../images/spacex.jpg';
import CartIcon2 from '../images/elon.jpg';
import students from "../images/star.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {findTuitsThunk}
  from "../../services/tuits-thunks";
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
  dispatch(deleteTuitThunk(id));
}


        return(
            <>
             <li className="list-group-item">

             <br/>
                       <div class="row" >

                        <div class="col-1 ps-0 ">
                             <img class="float-left float-start rounded-circle" src={`../images/${tuit.image}`} height = "45px" width="45px" />
                        </div>
                        <div class="col-11">
                           <div class=" fw-bold">{tuit.username} <i class="bi bi-check-circle-fill" style={{color: '#00aaff'}}></i> <span class="text-muted">{tuit.handle}<i class="bi bi-dot"></i>{tuit.time} </span> <i className="bi bi-x-lg float-end"
                                                                                                                                                                                                                                   onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                           <div class="">{tuit.tuit}</div>



                             <TuitStats tuit={tuit}/>
                        </div>
                       </div>

                     </li >
                     </>
            );


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