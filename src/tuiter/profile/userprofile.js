import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
const UserProfile = () => {
const userInfo= useSelector(state => state.user)
console.log({userInfo});
 const [profile,setProfile]=useState(userInfo);
 console.log(profile);
  const style1 = {
        color: "black",
        size: "20px",
      }
return(
   <>


<div class="padding">
<div className="row align-items-center justify-content-start pb-1">
                <div className="col-auto">
                    <Link to="/tuiter/" className="btn" title="cancel" >
                       <i class="bi bi-arrow-left"></i>
                    </Link>
                </div>
                <div className="col-10">
                    <span className="fs-5 fw-bold" style={style1}>{profile.user.firstName} {profile.user.lastName}</span><br/>

                </div>
            </div>
    <div class="col-md-14">
        <div class="card"> <img class="card-img-top" src="https://i.imgur.com/hLBXx8z.jpeg" alt="Card image cap"/>
            <div class="card-body little-profile">
                <div class="pro-img"><img src="https://i.imgur.com/PFOlDFb.jpeg" alt="user"/><button  class="btn-edit btn btn-light"><Link to='/tuiter/editprofile/'  class="list-group-item">
                                                                                                                                                                                                                             <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Edit Profile</span >
                                                                                                                                                                                                                           </Link></button></div>

                <h3 class="m-b-0"><span>{profile.user.firstName} {profile.user.lastName}</span ></h3><br/>
                <h6 class="m-b-0"><span>{profile.user.handle}</span ></h6><br/>
                <span style = {{color : 'black '}}>{profile.user.bio}</span><br/><br/>
                <span style = {{color : 'black '}}><i class="bi bi-geo-alt"></i> {profile.user.location}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><i class="bi bi-balloon"></i> {profile.user.dateOfBirth}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><i class="bi bi-calendar-week"></i> Joined {profile.user.dateJoined}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                <span style = {{color : 'black '}}><b>{profile.user.followingCount}</b> Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><b>{profile.user.followersCount}</b> Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            </div>
        </div>
    </div>
</div>

   </>
 );
}
export default UserProfile;