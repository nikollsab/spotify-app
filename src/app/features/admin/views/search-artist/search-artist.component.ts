import { Component, OnInit  } from '@angular/core';
import { SearchArtistPresenter } from './search-artist.presenter';
import { SpotifyService } from '../../commons/http/spotify.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
  providers: [ SearchArtistPresenter ]
})
export class SearchArtistComponent implements OnInit{

  constructor( public presenter: SearchArtistPresenter ) {  }

  ngOnInit(): void {
    this.presenter.loadArtistTracks();
  }
}
