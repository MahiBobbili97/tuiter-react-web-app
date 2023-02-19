const PostItem = (PostItems) => {
    return(`
         <ul>
          <div class="row">
           <div class="col-1 ps-0 ">
                <img class="float-left float-start rounded-circle" src='images/elon.jpg' height = 45px width="45px">
           </div>
           <div class="col-11">
              <div class="text-white fw-bold">Elon Musk<i class="fa-solid fa-circle-check"></i> <span class="text-muted"> Elon Musk - 23h </span> </div>
              <div class="text-white">'Amazing show about @Inspiration4x mission!'</div>

                    <div class="mt-2 border border-secondary rounded">

                    <img class=" w-100 border-bottom border-secondary rounded " src='images/students.jpg'  height = "340px">
                    <div class="w-100 ps-3 pt-2 pe-2 fw-bolder align-items-center text-white ">
                    Countdown: Inspiration4 Mission to Space | Netflix Official Site
                    </div>
                    <div class="mt-1 w-100 ps-3 pe-2 align-items-center">
                    From training to launch to landing, \this all-access docuseries rides along \with Inspiration crew on the first all-civilian orbital space..
                    </div>
                    <div class="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
                    <i class="fa-solid fa-link"></i> netflix.com
                    </div>
                    </div>
                    <br/>

                <ul class="nav   align-items-center nav-justified">
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-regular fa-comment"></i> &nbsp 23</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-solid fa-retweet"></i> &nbsp 33</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-regular fa-heart"></i> 99</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted " href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i>&nbsp </a>
                </li>


           </ul>
           </div>
          </div>
        </ul>
`);
}
export default PostItem;