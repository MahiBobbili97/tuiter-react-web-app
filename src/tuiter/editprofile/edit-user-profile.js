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
 const [firstName, setfirstName] = useState(userInfo.user.firstName)
 const [lastName, setlastName] = useState(userInfo.user.lastName)
 const [bio, setBio] = useState(userInfo.user.bio)
 const [location, setlocation] = useState(userInfo.user.location)
 const [website, setwebsite] = useState(userInfo.user.website)
 const [dob, setdob] = useState(userInfo.user.dob)
 const dispatch = useDispatch();
 const style1 = {
       color: "black",
       size: "20px",
     }
 const handleSaveButton = () => {
 dispatch(updateUser({
                                                        ...profile.user,
                                                        firstName:firstName,
                                                        lastName: lastName,
                                                        bio: bio,
                                                        location: location,
                                                        website: website,
                                                        dob:dob
                                                    }));
 };
return(
   <>    <div class="padding">
<div className="row align-items-center justify-content-start pb-1">
                <div className="col-auto">
                    <Link to="/tuiter/profile" className="btn" title="cancel" >
                        <i className="bi bi-x-lg" />
                    </Link>
                </div>
                <div className="col-10">
                    <span className="fs-5 fw-bold" style={style1}>Edit Profile</span>
                    <Link to="/tuiter/profile" className="btn btn-dark btn-sm rounded-pill position-relative float-end px-3 fw-bold" onClick={handleSaveButton}>Save</Link>
                </div>
            </div>

          <div class="col-md-14">

              <div class="card">  <img class="card-img-top" src="https://i.imgur.com/hLBXx8z.jpeg" alt="Card image cap"/>

                  <div class="card-body little-profile">
				   <div class="pro-img"><img src="https://i.imgur.com/PFOlDFb.jpeg" alt="user"/></div>
                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >First Name</span>
                                          <input
                                              defaultValue={profile.user.firstName}
                                              onChange={(e) => setfirstName(e.target.value)}
                                              className="form-control ps-2 pt-4"
                                              />
                                      </div>

                                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >Last Name</span>
                                          <input
                                              defaultValue={profile.user.lastName}
                                              onChange={(e) => setlastName(e.target.value)}
                                              className="form-control ps-2 pt-4"
                                              />
                                      </div>

                                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >Bio</span>
                                          <input
                                              defaultValue={profile.user.bio}
                                              onChange={(e) => setBio(e.target.value)}
                                              className="form-control ps-2 pt-4"
                                              />
                                      </div>

                                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >Location</span>
                                          <input
                                              defaultValue={profile.user.location}
                                              onChange={(e) => setlocation(e.target.value)}
                                              className="form-control ps-2 pt-4"
                                             />
                                      </div>

                                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >Website</span>
                                          <input
                                              defaultValue={profile.user.website}
                                              onChange={(e) => setwebsite(e.target.value)}
                                              className="form-control ps-2 pt-4"
                                              />
                                      </div>

                                      <div className ="position-relative mt-4">
                                          <span className ="pt-1 h6 position-absolute ps-2 text-secondary " >Date of Birth</span>
                                          <input
                                              defaultValue="2018-07-22"
                                              onChange={(e) => setdob(e.target.user.value)}
                                              className="form-control ps-2 pt-4"
                                              type = "date"/>
                                      </div>
                  </div>
              </div>
          </div>
      </div>

   </>
 );
}
export default EditUserProfile;