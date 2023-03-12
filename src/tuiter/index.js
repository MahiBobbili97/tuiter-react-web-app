import {Link}
  from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar
  from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList
  from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer}});

function Tuiter() {

 return(
 <Provider store={store}>
 <div class="container">
 <Nav/>
       <div class="row">
           <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
             <NavigationSidebar active="explore"/>
           </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 text-white"  style={{"position": "relative"}}>
                   <Routes>
                            <Route path="home"    element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                   </Routes>

           </div>
           <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block text-white">
            <WhoToFollowList/>
           </div>
         </div>
     </div>







</Provider>
 )
}
export default Tuiter