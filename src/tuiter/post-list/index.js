import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import PostSummaryItem
  from "./PostListItem";
import {findTuitsThunk}
  from "../../services/tuits-thunks";
const PostList = () => {
const {tuits, loading} = useSelector(
                    (state) => state.tuitsData);
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])

 return(
   <ul className="list-group" style={{borderRadius: '20px!important'}}>
      {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
          }

   </ul>
 );
};
export default PostList;