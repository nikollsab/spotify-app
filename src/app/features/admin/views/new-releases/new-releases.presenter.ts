import { SpotifyService } from '../../commons/http/spotify.service';
import { Router } from '@angular/router';
import { Album } from '../../interfaces/album-response.interface';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Injectable()
export class NewReleasesPresenter {

  albums: Album[] = [];
  loading = true;

constructor(
    private spotify: SpotifyService,
    private router: Router
){}

initial(){
    this.spotify.getNewReleases()
    .subscribe(
      albums => this.albums = albums,
      err => console.log(err),
    );
}

goArtist(id: string) {
    this.router.navigate(['/spotify/artist-detail', id]);
    // this.router.navigateByUrl('');
  }

  loadNewReleases(){
    this.spotify.getNewReleases()
  .pipe ( finalize( () => this.loading = false))
  .subscribe(
    albums => this.albums = albums,
    err => console.log(err)
    );
    console.log('private new releases');
  }
}
