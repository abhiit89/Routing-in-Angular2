/**
 * Created by namita on 7/7/16.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';

export const routes: RouterConfig = [
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
