import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function exploreComponent() {
   $('#wd-explore').append(`

  <div class="container">
      <div class="row">
          <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
            ${NavigationSidebar('home')}
          </div>
           <div class="col-10 col-lg-7 col-xl-6  text-white">
            ${PostList()}
          </div>
          <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
            ${PostSummaryList()}
          </div>
        </div>
    </div>
   `);
}
$(exploreComponent);