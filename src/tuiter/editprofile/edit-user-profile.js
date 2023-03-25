import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
function EditUserProfile ()  {
const count = useSelector((state) => state.user);
console.log(count);
 const [profile,setProfile]=useState({
                                                                            firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
                                                                            profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
                                                                            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
                                                                            website: 'youtube.com/webdevtv',
                                                                            location: 'Boston, MA',	dateOfBirth: '2018-01-01',	dateJoined: '2018-01-01',
                                                                            followingCount: 340,	followersCount: 223
                                                                          });
return(
   <>    <div class="padding">


          <div class="col-md-14">
          <button class="btn btn-dark" style={{float:'right'}}><Link to="/tuiter/profile" class="list-group-item">
                                                <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Save</span >
                                              </Link></button><br/><br/>
              <div class="card"> <img class="card-img-top" src="https://i.imgur.com/hLBXx8z.jpeg" alt="Card image cap"/>
                  <div class="card-body little-profile">
                      <div class="pro-img"><img src="https://i.imgur.com/PFOlDFb.jpeg" alt="user"/></div>
                      <h3 class="m-b-0"><input value={profile.firstName}  size="7"/><input value={profile.lastName}  size="7"/><br/></h3><br/>
                      <h6 class="m-b-0"><input value={profile.handle}  size="7"/></h6><br/>



                     <textarea rows="4" cols="70" value={profile.bio}/>
<br/><br/>
                      <span style = {{color : 'black '}}><i class="bi bi-geo-alt"></i> <input value={profile.location}  size="7"/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><i class="bi bi-balloon"></i> <input type="date" id="start" name="trip-start" value={profile.dateOfBirth}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><i class="bi bi-calendar-week"></i> Joined <input type="date" id="start" name="trip-start" value={profile.dateJoined}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                      <span style = {{color : 'black '}}><b><input value={profile.followingCount}  size="3"/></b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><b><input value={profile.followersCount}  size="3"/></b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                  </div>
              </div>
          </div>
      </div>

   </>
 );
}
export default EditUserProfile;