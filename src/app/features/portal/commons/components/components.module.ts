import { NgModule } from '@angular/core';

import { PremiumComponent } from './premium/premium.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SpotifyBannerModule } from '@spotify/commons/components';

@NgModule({
    declarations: [
    HelpComponent,
    HomeComponent,
    PremiumComponent
    ],
    imports: [
    SpotifyBannerModule
    ],
    exports: [
    HelpComponent,
    HomeComponent,
    PremiumComponent ]
  })
  export class PortalComponentsModule { }
