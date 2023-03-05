import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
  return (
    <div className="list-group">
         <a className="list-group-item"><i class="bi bi-twitter"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Tuiter</span></a>
         <Link to="/tuiter/home" className={`list-group-item
                        ${active === 'home'?'active':''}`}>
           <i class="bi bi-house-door-fill"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Home</span>
         </Link>
          <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i class="bi bi-hash"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Explore</span>
              </Link>
              <Link to="/" className="list-group-item">
                <i class="bi bi-app"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Labs</span>
              </Link>
         <a className={`list-group-item
                        ${active === 'messages'?'active':''}`}>
           <i class="bi bi-chat"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Messages</span>
         </a>
         <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`}>
           <i class="bi bi-bookmark"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Bookmarks</span>
         </a>
         <a className={`list-group-item
                        ${active === 'lists'?'active':''}`}>
           <i class="bi bi-list-ul"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Lists</span>
         </a>
        <a className={`list-group-item
                            ${active === 'profile'?'active':''}`}>
               <i class="bi bi-person-circle"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Profile</span>
             </a>
             <a className={`list-group-item
                            ${active === 'more'?'active':''}`}>
               <i class="bi bi-three-dots"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">More</span>
             </a>
           </div>
  );

};
export default NavigationSidebar;