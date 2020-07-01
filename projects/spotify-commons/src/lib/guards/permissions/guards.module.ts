import { NgModule } from '@angular/core';
import { SpotifyAuthenticatedGuard } from './authenticated.guard';

@NgModule({
    imports: [  ],
    providers: [ SpotifyAuthenticatedGuard ]
  })
  export class SpotifyGuardsModule { }
