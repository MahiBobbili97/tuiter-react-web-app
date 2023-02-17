const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="/"><i class="fa-solid fa-house-chimney"></i> Home</a>
     <a class="list-group-item active" href="/"><i class="fa-solid fa-hashtag"></i> Explore</a>
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
export default NavigationSidebar;
