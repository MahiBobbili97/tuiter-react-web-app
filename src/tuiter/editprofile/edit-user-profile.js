import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {updateUser} from "../../redux/user-reducer";
function EditUserProfile ()  {
const userInfo= useSelector(state => state.user)
console.log({userInfo});

 const [profile,setProfile]=useState(userInfo);
 const dispatch = useDispatch();
 const handleSaveButton = () => {
 dispatch(updateUser(profile));
 };
return(
   <>    <div class="padding">


          <div class="col-md-14">
          <button class="btn btn-dark" style={{float:'right'}} onClick={handleSaveButton}><Link to="/tuiter/profile" class="list-group-item">
                                                <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Save</span >
                                              </Link></button><br/><br/>
              <div class="card"> <img class="card-img-top" src="https://i.imgur.com/hLBXx8z.jpeg" alt="Card image cap"/>
                  <div class="card-body little-profile">
                      <div class="pro-img"><img src="https://i.imgur.com/PFOlDFb.jpeg" alt="user"/></div>
                      <h3 class="m-b-0"><input value={profile.user.firstName}  onChange={(e)=>setProfile({...profile,firstName:e.target.value,})} size="7"/><input value={profile.user.lastName} onChange={(e)=>setProfile({...profile,lastName:e.target.value,})} size="7"/><br/></h3><br/>
                      <h6 class="m-b-0"><input value={profile.user.handle} onChange={(e)=>setProfile({...profile,handle:e.target.value,})}   size="7"/></h6><br/>



                     <textarea rows="4" cols="70" value={profile.user.bio} onChange={(e)=>setProfile({...profile,bio:e.target.value,})}/>
<br/><br/>
                      <span style = {{color : 'black '}}><i class="bi bi-geo-alt"></i> <input value={profile.user.location}  onChange={(e)=>setProfile({...profile,location:e.target.value,})} size="7"/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><i class="bi bi-balloon"></i> <input type="date" id="start" name="trip-start" value={profile.user.dateOfBirth} onChange={(e)=>setProfile({...profile,dateOfBirth:e.target.value,})}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><i class="bi bi-calendar-week"></i> Joined <input type="date" id="start" name="trip-start" value={profile.user.dateJoined} onChange={(e)=>setProfile({...profile,dateJoined:e.target.value,})}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                      <span style = {{color : 'black '}}><b><input value={profile.user.followingCount}  size="3" onChange={(e)=>setProfile({...profile,followingCount:e.target.value,})}/></b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style = {{color : 'black '}}><b><input value={profile.user.followersCount}  size="3" onChange={(e)=>setProfile({...profile,followersCount:e.target.value,})}/></b>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                  </div>
              </div>
          </div>
      </div>

   </>
 );
}
export default EditUserProfile;