/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
import {PostsDataService} from './posts-data.service';
import {PostsData} from './posts-data';
import {Router} from '@angular/router';

@Component({
    template: `
    <div>
        <ul class="items">
        <li *ngFor="let postData of postsData" (click)="onSelect(postData)">
        <span>{{postData.title}}</span></li>
        </ul>
    </div>
    `,
    providers: [PostsDataService]
})

export class PostsListsComponent {
    constructor(private _postsDataService: PostsDataService, private router: Router) {
        this.log();
    }

    private postsData:PostsData[]=[];
    private errorMessage:any='';

    log() {
        this._postsDataService.getData()
            .subscribe(
                posts => this.postsData=posts,
                error =>  this.errorMessage = <any>error);
    }
    onSelect(post:PostsData){
        this.router.navigate(['/posts',post.id]);
    }
}