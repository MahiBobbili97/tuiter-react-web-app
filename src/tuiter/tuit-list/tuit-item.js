import React from "react";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuitstats";
import { useState } from 'react';
const TuitListItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const [num,changeNum] = useState(tuit.likes);
    const incrementNum = () => {

        if(document.getElementById(tuit._id ).style.color=='red')
        {changeNum(num-1);
        document.getElementById(tuit._id ).style.color='gray'
        }
        else
        {changeNum(num+1);
        document.getElementById(tuit._id).style.color='red'
        }

      }
    if (tuit.liked) {
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



                             <ul class="nav   align-items-center nav-justified">
                             <li class="nav-item">
                               <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {tuit.replies}</a>
                             </li>
                             <li class="nav-item">
                               <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-repeat"></i>  {tuit.retuits}</a>
                             </li>
                             <li class="nav-item">

                               <a class="nav-link text-muted" href="#" onClick={incrementNum}><i style={{color: 'red'}} class="bi-heart-fill" id={tuit._id} ></i> {num}</a>


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
                                  <img class="float-left float-start rounded-circle" src={`../images/${tuit.image}`} height = "45px" width="45px" />
                             </div>
                             <div class="col-11">
                                <div class=" fw-bold">{tuit.username} <i class="bi bi-check-circle-fill" style={{color: '#00aaff'}}></i> <span class="text-muted">{tuit.handle}<i class="bi bi-dot"></i>{tuit.time} </span> <i className="bi bi-x-lg float-end"
                                                                                                                                                                                                                                        onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                                <div class="">{tuit.tuit}</div>



                                  <ul class="nav   align-items-center nav-justified">
                                  <li class="nav-item">
                                    <a class="nav-link text-muted" href="#"><i class="bi bi-chat"></i>  {tuit.replies}</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-repeat"></i>  {tuit.retuits}</a>
                                  </li>
                                  <li class="nav-item">
                                     <a class="nav-link text-muted" href="#" onClick={incrementNum}><i style={{color: 'gray'}} class="bi-heart-fill" id={tuit._id} ></i> {num}</a>

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
export default TuitListItem;