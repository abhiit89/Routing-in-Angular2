/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
import {PostsDataService} from '../posts-data.service';
import {PostsData} from './posts-data';

@Component({
    template: `
    <div>
        <h2>Posts:</h2>
        <ul *ngFor="let postData of postsData">
        <li>Post Id: {{postData.id}}</li>
        <li>Title: {{postData.title}}</li>
        <li>Body: {{postData.body}}</li>

        </ul>
    </div>
    `,
    styles:['ul{list-style-type: none}'],
    providers: [PostsDataService]
})

export class PostsComponent {
    constructor(private _postsDataService: PostsDataService) {
        this.log();
    }

    private postsData:PostsData[]=[];

    log() {
        this.postsData = this._postsDataService.getData();
    }
}