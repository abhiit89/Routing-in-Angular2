/**
 * Created by NamitaMalik on 9/27/2016.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PostsComponent }    from './posts.component';
import { PostsDetailComponent }  from './posts-detail.component';
import {PostsDataService} from './posts-data.service';
import {postsRouting} from "./posts.routes";
import {PostsListsComponent} from "./posts-lists.component";
@NgModule({
    imports: [
        CommonModule,
        postsRouting
    ],
    declarations: [
        PostsComponent,
        PostsDetailComponent,
        PostsListsComponent
    ],
    providers: [
        PostsDataService
    ]
})
export class PostsModule {}
