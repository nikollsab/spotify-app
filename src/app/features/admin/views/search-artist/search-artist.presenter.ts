import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Artist } from '../../interfaces/album-response.interface';
import { SpotifyService } from '../../commons/http/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { SearchArtistsResponse } from '../../interfaces/search-artists-response.interface';

@Injectable()
export class SearchArtistPresenter {
    formSearch: FormGroup;
    artists: Artist[] = [];
    loading = true;

constructor(
        private fb: FormBuilder,
        private spotify: SpotifyService,
        private router: Router,
        private activatedRoute: ActivatedRoute
      ) {
        this.formSearch = this.fb.group({
          q: ['', Validators.required]
        });
      }

search() {
    if (this.formSearch.valid) {
      this.spotify.searchArtists(this.formSearch.value.q)
        .subscribe(
          res => this.artists = res.artists.items,
          err => console.log(err)
        );
    }
  }

  goArtist(id: string) {
    this.router.navigate(['/spotify/artist-detail', id]);
    // this.router.navigateByUrl('');
  }

  loadArtistTracks(){
    this.spotify.searchArtists(this.formSearch.value)
    .pipe ( finalize( () => this.loading = false))
        .subscribe(
          tracks => this.artists = tracks.artists.items,
          err => console.log(err)
          );
    console.log('artists tracks finalize');
        }
}
