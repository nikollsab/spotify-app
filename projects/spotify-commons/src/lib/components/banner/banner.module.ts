
import { NgModule } from '@angular/core';
import { SpotifyBannerComponent } from './banner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ SpotifyBannerComponent ],
    exports: [ SpotifyBannerComponent ],
    imports: [
    MatButtonModule,
    MatIconModule
     ]
  })
  export class SpotifyBannerModule { }
