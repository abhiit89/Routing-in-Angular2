/**
 * Created by namita on 7/7/16.
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
bootstrap(AppComponent);
//Applying the route configuration when bootstrapping Angular2 app
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
])
    .catch(err => console.error(err));