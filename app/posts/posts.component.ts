/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
import {PostsDataService} from '../posts-data.service';

@Component({
    template: `
    <div>
        <h2>Posts Component</h2>
    </div>
    `,
    providers: [PostsDataService]
})

export class PostsComponent {
    constructor(private _postsDataService: PostsDataService) {
        this.log();
    }

    private data = this._postsDataService.getData();

    log() {
        console.log(333345, this.data);
    }
}