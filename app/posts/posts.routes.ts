/**
 * Created by namita on 7/10/16.
 */

import {RouterConfig } from '@angular/router';
import {PostsComponent} from './posts.component'
import {PostsListsComponent} from './posts-lists.component';
import {PostsDetailComponent} from './posts-detail.component';
import {AuthGuard} from '../auth-guard.service';

export const PostsRoutes: RouterConfig = [
    {
        path: 'posts',
        component: PostsComponent,
        children : [
            {
                path:'',
                component:PostsListsComponent
            },
            {
                path:':id',
                component: PostsDetailComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];