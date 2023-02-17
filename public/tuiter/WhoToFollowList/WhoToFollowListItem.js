const WhoToFollowListItem = (who) => {
   return(`
        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-2 ps-1 position-relative">
                                    <img class="float-left rounded-circle" src=${who.avatarIcon} height="45px" width="45px"/></div>
                                <div class="col-6 ps-1">
                                    <div class="fw-bold">${who.userName} <i class="fa-sharp fa-solid fa-circle-check"></i></div>
                                    <div class="text-muted">
                                        @${who.handle}
                                    </div>

                                </div>
                                <div class="col-4">
                                    <button class="btn btn-sm btn-primary w-200 rounded-pill float-end" type="submit" >Follow</button>
                                </div>
                            </div>
                        </li>
       <li>

   `);
}
export default WhoToFollowListItem;