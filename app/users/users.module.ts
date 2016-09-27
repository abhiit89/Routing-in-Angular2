/**
 * Created by NamitaMalik on 9/27/2016.
 */


import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { UsersComponent }    from './users.component';
import {userRouting} from './users.routes';
@NgModule({
    imports: [
        CommonModule,
        userRouting
    ],
    declarations: [
        UsersComponent
    ],
})
export class UsersModule {}