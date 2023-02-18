const PostItem = (post) => {
   return(`

       <table>
           <tr>
               <td style="vertical-align: top;"><img class="wd-avatar" src="images/virgin.jpg" style="width:48px;height:48px;float:left;"/></td>
               <td><div class="wd-author">
                   Robert Zubrin <div class="wd-author-handle">@robert_zubrin &#x2022; Jul 31</div></div><br><div class="wd-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales ullamcorper libero, id fermentum sem pulvinar a. Suspendisse euismod dignissim lorem, id posuere odio blandit quis. Phasellus vestibulum nibh in neque venenatis tempus. Nulla risus est, placerat at dictum ac, aliquam in urna. Nulla fermentum, odio ut gravida pulvinar, enim purus suscipit risus, ac facilisis tortor nisl quis odio. Morbi suscipit lobortis enim, eget imperdiet arcu vehicula non. </div></td>
           </tr>
           <tr>
               <td></td>
               <td><img class="wd-img-main" src="images/students.jpg" style="width:504px;height:264px"/>
                   <div class="wd-border-div"><div class="wd-img-below-title">Neque porro quisquam est qui dolorem ipsum quia</div><div class="wd-img-below-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper libero, id fermentum sem pulvinar a. </div></div></td>
           </tr>
       </table>

   `);
}
export default PostItem;