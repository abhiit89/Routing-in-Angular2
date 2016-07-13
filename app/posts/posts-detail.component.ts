/**
 * Created by namita on 7/11/16.
 */

import {Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {PostsData} from './posts-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


@Component({
    template: `
    <div>
        <h2>Posts:</h2>
        <div>
        <button (click)="showId()">Get Route Param</button>
        <span *ngIf="id">Id passed is : {{id}}</span>
        </div>
    </div>
    `
})

export class PostsDetailComponent {
    constructor(private route:ActivatedRoute,
                private router:Router) {
    }
    private sub: any;
    showId(){
        this.sub = this.route.params.subscribe(params=>{
            this.id = +params['id'];
        })
    }
}

