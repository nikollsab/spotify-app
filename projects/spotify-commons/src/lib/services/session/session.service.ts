import { SpotifySessionModule } from './session.module';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: SpotifySessionModule
  })
  export class SpotifySession {
    private key = 'token';

    constructor() {
    }

 destroy() {
      sessionStorage.removeItem(this.key);
    }
}
