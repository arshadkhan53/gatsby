import React ,{useState} from 'react';
import { Link } from 'gatsby'



export default  () => {

    return (
        <ul class="menu menu--top-navigations nav">
              <li class="first">
                    <Link to="/" data-drupal-link-system-path="<front>" class="is-active">Explore</Link>
              </li>
                <li>
               <Link to="/page-2" data-drupal-link-system-path="destinations/geo">Top Destinations</Link>
              </li>
                <li>
                    <Link to="/videos" data-drupal-link-system-path="videos">Videos</Link>
              </li>
             
        </ul>
    )

}