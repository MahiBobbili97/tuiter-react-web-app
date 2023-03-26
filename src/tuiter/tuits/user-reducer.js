import { createSlice } from "@reduxjs/toolkit";
const user={firstName: "Mahi", lastName: "Bobbili", handle: "@mahibobbili",
                                                         profilePicture: "jose.png", 	bannerPicture: "polyglot.png",
                                                         bio: "Student, Cricketer, Web Developer",
                                                         website: "youtube.com/codeoverload",
                                                         location: "Boston, MA",	dateOfBirth: "1998-04-17",	dateJoined: "4/2009",
                                                         followingCount: 330,	followersCount: 423,
            };
const initialState={
user:user,
};
const userSlice=createSlice({
name:"user",
initialState,
reducers:{
updateUser:(state,action)=>{state.user=action.payload;},},
});
export const {updateUser}=userSlice.actions;
export default userSlice.reducer;
