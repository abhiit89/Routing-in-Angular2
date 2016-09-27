/**
 * Created by namita on 7/10/16.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts.component'
import {PostsListsComponent} from './posts-lists.component';
import {PostsDetailComponent} from './posts-detail.component';
//import {AuthGuard} from '../auth-guard.service';

const PostsRoutes: Routes  = [
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
/*
                canActivate: [AuthGuard]
*/
            }
        ]
    }
];

export const postsRouting: ModuleWithProviders = RouterModule.forChild(PostsRoutes);