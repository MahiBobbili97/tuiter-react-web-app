const NavigationSidebar = (node) => {
if (node === "explore") {
return(`

      <div class="list-group">
           <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
           <a class="list-group-item" href="../HomeScreen/index.html"><i class="fa-solid fa-house-chimney"></i> Home</a>
           <a class="list-group-item active" href="../explore/index.html"><i class="fa-solid fa-hashtag"></i> Explore</a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-bell"></i> Notifications</a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-envelope"></i> Messages</a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-bookmark"></i> Bookmarks</a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-list-ul"></i> Lists</a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-user"></i> Profile</a>
           <a class="list-group-item" href="/"><i class="fa fa-image"></i> More</a>
         </div>
         <div class="d-grid mt-2">
           <a href="tweet.html"
              class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
         </div>
      `);
}
if (node === "home") {
return(`

      <div class="list-group">
           <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
           <a class="list-group-item active" href="../HomeScreen/index.html"><i class="fa-solid fa-house-chimney"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Home</span></a>
           <a class="list-group-item " href="../explore/index.html"><i class="fa-solid fa-hashtag"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Explore</span></a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-bell"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Notifications</span></a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-envelope"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Messages</span></a></a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-bookmark"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Bookmarks</span></a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-list-ul"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Lists</span></a>
           <a class="list-group-item" href="/"><i class="fa-solid fa-user"></i> <span  class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">Profile</span></a>
           <a class="list-group-item" href="/"><i class="fa fa-image"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-2">More</span></a>
         </div>
         <div class="d-grid mt-2">
           <a href="tweet.html"
              class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
         </div>
      `);
}

}
export default NavigationSidebar;
