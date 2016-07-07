/**
 * Created by namita on 7/7/16.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';

//RouterConfig is an array of routes
export const routes: RouterConfig = [
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent }
];

//This exports not only includes application rules but also services such as Router
//Router - Displays the application component for the active URL. Manages navigation from one component to the next.
export const APP_ROUTER_PROVIDERS = [
    //This is required to make our routes available to the application. Angular 2 using dependency injection to achieve this. provideRouter function creates providers for us.
    provideRouter(routes)
];
