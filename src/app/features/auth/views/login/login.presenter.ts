import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../commons/http/auth.service';
import { SpotifyService } from '../../../admin/commons/http/spotify.service';
import { Album } from 'src/app/features/admin/interfaces/album-response.interface';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoginPresenter {

  albums: Album[] = [];
  loading = true;
constructor(
    private auth: AuthService,
    private router: Router,
    private spotify: SpotifyService
    ) { }

signIn() {
    this.auth.signIn()
    .subscribe(
    token => {
    sessionStorage.setItem('token', token);
    this.router.navigateByUrl('/spotify');
          }
        );
      }

}
