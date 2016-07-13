/**
 * Created by namita on 7/11/16.
 */

import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';
import {PostsDataService} from './posts-data.service';
@Component({
    template:  `
    <h2>View Posts</h2>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers:  [PostsDataService]
})
export class PostsComponent { }
