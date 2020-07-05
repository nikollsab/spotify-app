import { Component, OnInit } from '@angular/core';
import { Album } from './interfaces/album-response.interface';
import { SpotifySession } from '@spotify/commons/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  header = {
    brandUrl: '/spotify',
    brand: 'Spotify App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Buscar', url: '/spotify/search' }
    ]
  };

  constructor(
    // private session: SpotifySession,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  closeSession() {
    // this.session.destroy();
    this.router.navigateByUrl('/');
  }
}
