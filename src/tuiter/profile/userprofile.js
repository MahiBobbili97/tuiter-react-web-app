import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const UserProfile = () => {
 let [userProfile, setuserProfile] = useState('');
  const dispatch = useDispatch();

 const [profile,setProfile]=useState({
                                       firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
                                       profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
                                       bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
                                       website: 'youtube.com/webdevtv',
                                       location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
                                       followingCount: 340,	followersCount: 223
                                     }
 );
return(
   <>


<div class="padding">

    <div class="col-md-14">
        <div class="card"> <img class="card-img-top" src="https://i.imgur.com/hLBXx8z.jpeg" alt="Card image cap"/>
            <div class="card-body little-profile">
                <div class="pro-img"><img src="https://i.imgur.com/PFOlDFb.jpeg" alt="user"/><button  class="btn-edit btn btn-light"><Link to="/tuiter/editprofile"  class="list-group-item">
                                                                                                                                                                                                                             <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Edit Profile</span >
                                                                                                                                                                                                                           </Link></button></div>

                <h3 class="m-b-0"><span>{profile.firstName} {profile.lastName}</span ></h3><br/>
                <h6 class="m-b-0"><span>{profile.handle}</span ></h6><br/>
                <span style = {{color : 'black '}}>{profile.bio}</span><br/><br/>
                <span style = {{color : 'black '}}><i class="bi bi-geo-alt"></i> {profile.location}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><i class="bi bi-balloon"></i> {profile.dateOfBirth}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><i class="bi bi-calendar-week"></i> Joined {profile.dateJoined}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                <span style = {{color : 'black '}}><b>{profile.followingCount}</b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {{color : 'black '}}><b>{profile.followersCount}</b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            </div>
        </div>
    </div>
</div>

   </>
 );
}
export default UserProfile;