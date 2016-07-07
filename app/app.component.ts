/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
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