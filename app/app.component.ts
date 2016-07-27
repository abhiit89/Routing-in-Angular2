/**
 * Created by namita on 7/7/16.
 */

import {Component} from '@angular/core';
// importing Angular Component Router. Not the part of Angular 2 core. In own library package @angular/router
import { ROUTER_DIRECTIVES }  from '@angular/router';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Routing in Angular 2</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" routerLink="/posts"  routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Posts</a>
        <a class="mdl-navigation__link" routerLink="/users">Users</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Routing in Angular 2</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" routerLink="/posts">Posts</a>
       <a class="mdl-navigation__link" routerLink="/users">Users</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content"><h1>Component Router</h1>
      <router-outlet></router-outlet></div>
  </main>
</div>
    `,
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent {
}

//routerLink - directive for binding clickable HTML element to a route. The directive will also update href element when applied to an <a> link, so it is SEO friendly
//Routers care about the application components and not abput the reusable components
//router-outlet - Location where component will be placed
//The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.