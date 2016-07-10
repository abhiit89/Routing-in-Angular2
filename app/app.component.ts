/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
// importing Angular Component Router. Not the part of Angular 2 core. In own library package @angular/router
import { ROUTER_DIRECTIVES }  from '@angular/router';
@Component({
    selector: 'my-app',
    template: `
      <h1>Component Router</h1>
      <nav>
        <a [routerLink]="['/posts']">Posts</a>
        <a [routerLink]="['/users']">Users</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent {
}

//routerLink - directive for binding clickable HTML element to a route. The directive will also update href element when applied to an <a> link, so it is SEO friendly
//Routers care about the application components and not abput the reusable components
//router-outlet - Location where component will be placed
//The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.