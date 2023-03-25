import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import whoReducer from "./who-reducer";
const store=configureStore({
reducer:{user:userReducer,},
});
export default store;