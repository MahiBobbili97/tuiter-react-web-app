import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function exploreComponent() {
   $('#wd-explore').append(`

<div class="container">
    <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
			${NavigationSidebar('explore')}
        </div>
		<div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 text-white">
		<div>
                       <div class="row">
                           <div class="col-11">
                               <div class="form-group has-search">
                                   <span class="fa fa-search form-control-feedback" style="position: absolute;z-index: 2;display: block;width: 2.375rem;height: 2.375rem;line-height: 2.375rem;text-align: center;pointer-events: none;color: #aaa;"></span>
                                   <input type="text" class="form-control" placeholder="Search Twitter" style="border-radius:25px;">
                               </div>
                           </div>

                           <div class="col-1">
                               <a href="explore-settings.html"><i
                                                                  class="fa-solid fa-gear fa-xl mt-3 text-primary"></i></a>
                           </div>

                       </div>
                       <div class="col-xs-12" style="height:10px;"></div>

                       <ul class="nav nav-tabs">
                           <li class="nav-item">
                               <a class="nav-link active" href="for-you.html">For you</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="trending.html">Trending</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="news.html">News</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="sports.html">Sports</a>
                           </li>
                           <li class="nav-item d-none d-xxl-inline-block d-xl-inline-block d-lg-inline-block d-md-inline-block d-sm-none ps-2">
                               <a class="nav-link " href="entertainment.html">Entertainment</a>
                           </li>
                       </ul>
                       <div class="col-xs-12" style="height:10px;"></div>
                       <div class="card">
                                          <div class="position-relative">
                                              <img src="images/students.jpg"
                                                   width="100%" class="card-img-top">
                                              <h2 class="position-absolute bottom-0 left-0 ms-1 text-white fw-bold">Back to School</h2>
                                          </div>
			${PostSummaryList()}</div> </div>
		</div>
		<div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block text-white">
			${WhoToFollowList()}
		</div>
	</div>
</div>
   `);
}
$(exploreComponent);