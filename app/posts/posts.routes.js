/**
 * Created by namita on 7/10/16.
 */
"use strict";
var posts_component_1 = require('./posts.component');
var posts_lists_component_1 = require('./posts-lists.component');
var posts_detail_component_1 = require('./posts-detail.component');
exports.PostsRoutes = [
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
        children: [
            {
                path: '',
                component: posts_lists_component_1.PostsListsComponent
            },
            {
                path: ':id',
                component: posts_detail_component_1.PostsDetailComponent
            }
        ]
    }
];
//# sourceMappingURL=posts.routes.js.map