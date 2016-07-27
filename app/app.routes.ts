/**
 * Created by namita on 7/7/16.
 */

import {provideRouter,RouterConfig } from '@angular/router';
import {AppComponent} from './app.component';
import {PostsRoutes} from './posts/posts.routes';
import {UsersComponent} from './users/users.component';
import {authProviders} from './auth-guard.service'

//RouterConfig is an array of routes
export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
    ...PostsRoutes,
    { path: 'users', component: UsersComponent }
]

//This exports not only includes application rules but also services such as Router
//Router - Displays the application component for the active URL. Manages navigation from one component to the next.
export const APP_ROUTER_PROVIDERS = [
    //This is required to make our routes available to the application. Angular 2 using dependency injection to achieve this. provideRouter function creates providers for us.
    provideRouter(routes),
    authProviders
];
