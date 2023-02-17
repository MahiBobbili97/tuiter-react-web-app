const PostSummaryItem = (post) => {
   return(`
       <li class="list-group-item"><img class="image-wrapper float-end w-25 h-25 p-3" src=${post.image}/>
                               <div class="card-body">
                                   <span style="color:#808080;">${post.topic}</span>
                                   <h5 class="card-title font-weight-bold "><span class="fw-bold">${post.userName} </span><i class="fa-sharp fa-solid fa-circle-check"></i> <span style="color:#808080;">- ${post.time}</span></h5>
                                   <p class="card-text font-weight-bold fw-bold">
                                       ${post.title}</p>

                               </div>
                           </li>

   `);
}
export default PostSummaryItem;