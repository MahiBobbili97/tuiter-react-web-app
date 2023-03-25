import { createSlice } from "@reduxjs/toolkit";
const user={firstName: "Jose", lastName: "Annunziato", handle: "@jannunzi",
                                                         profilePicture: "jose.png", 	bannerPicture: "polyglot.png",
                                                         bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
                                                         website: "youtube.com/webdevtv",
                                                         location: "Boston, MA",	dateOfBirth: "7/7/1968",	dateJoined: "4/2009",
                                                         followingCount: 340,	followersCount: 223,
            };
const initialState={
user:user,
};
const userSlice=createSlice({
name:"user",
initialState,
reducers:{
updateUser:(state,action)=>{
state.user.firstName = action.payload.firstName;
                state.user.lastName = action.payload.lastName;
                state.user.handle = action.payload.handle;
                state.user.bio = action.payload.bio;
                state.user.location = action.payload.location;
                state.user.website = action.payload.website;



},},
});
export const {updateUser}=userSlice.actions;
export default userSlice.reducer;
