/**
 * Created by NamitaMalik on 9/27/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { routing,
    appRoutingProviders }  from './app.routing';
import {PostsModule} from './posts/posts.module';
import {UsersComponent} from './users/users.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        PostsModule
    ],
    declarations: [
        AppComponent,
        UsersComponent

    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]})
export class AppModule { }
