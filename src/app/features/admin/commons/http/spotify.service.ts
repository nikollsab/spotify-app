import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Album, Artist } from '../../interfaces/album-response.interface';
import { NewReleaseResponse } from '../../interfaces/new-release-response.interface';
import { Track } from '../../interfaces/track.interface';
import { TopTracksResponse } from '../../interfaces/top-tracks-response.interface';
import { SearchArtistsResponse } from '../../interfaces/search-artists-response.interface';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<Album[]> {
    return this.http.get<NewReleaseResponse>('browse/new-releases?limit=20')
    .pipe(
      map(res => res.albums.items)
    );
  }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`artists/${id}`);
  }

  getArtistTracks(id: string): Observable<Track[]> {
    return this.http.get<TopTracksResponse>(`artists/${id}/top-tracks?country=us`)
    .pipe(
      map( res => res.tracks)
    );
  }

  searchArtists( q: string ): Observable<SearchArtistsResponse> {
    return this.http.get<SearchArtistsResponse>(`search?q=${q}&type=artist&limit=15`);
  }

}
