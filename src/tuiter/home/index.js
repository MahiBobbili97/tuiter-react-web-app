import React from "react";
import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css";
const HomeComponent = () => {
 return(
   <>
   <h4 style = {

    {color: 'black'}}>Home</h4>
    <WhatsHappening/>

     <TuitList/>
   </>
 );
};
export default HomeComponent;