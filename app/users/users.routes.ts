/**
 * Created by NamitaMalik on 9/27/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component'
//import {AuthGuard} from '../auth-guard.service';

const UsersRoutes: Routes  = [
    {
        path: '',
        component: UsersComponent,
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(UsersRoutes);