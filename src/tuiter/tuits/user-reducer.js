import { createSlice } from "@reduxjs/toolkit";
const user={firstName: "Mahi", lastName: "Bobbili", handle: "@mahibobbili",
                                                         profilePicture: "jose.png", 	bannerPicture: "polyglot.png",
                                                         bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
                                                         website: "youtube.com/webdevtv",
                                                         location: "Boston, MA",	dateOfBirth: "1967-04-12",	dateJoined: "4/2009",
                                                         followingCount: 340,	followersCount: 223,
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
