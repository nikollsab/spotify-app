import { Injectable, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/album-response.interface';
import { Track } from '../../interfaces/track.interface';
import { SpotifyService } from '../../commons/http/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ArtistDetailPresenter {

artist: Artist;
tracks: Track[] = [];
loading = true;

constructor(
private spotify: SpotifyService,
private activatedRoute: ActivatedRoute
){}

initial(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spotify.getArtist(id)
    .subscribe(
      artist => this.artist = artist,
      err => console.log(err)
    );

    this.spotify.getArtistTracks(id)
    .subscribe(
      tracks => this.tracks = tracks,
      err => console.log(err)
    );
}

loadArtistDetail(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.spotify.getArtistTracks(id)
  .pipe ( finalize( () => this.loading = false))
      .subscribe(
        tracks => this.tracks = tracks,
        err => console.log(err)
        );
  console.log('artist detail finalize');
      }

}

