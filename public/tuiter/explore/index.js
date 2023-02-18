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
			${PostSummaryList()}
		</div>
		<div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block text-white">
			${WhoToFollowList()}
		</div>
	</div>
</div>
   `);
}
$(exploreComponent);