import { createSlice } from "@reduxjs/toolkit";
import users from './user.json';

const userSlice=createSlice({
name:'users',
initialState:users,
reducers:{}
});
export default userSlice.reducer;