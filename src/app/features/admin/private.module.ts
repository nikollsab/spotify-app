import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { RouterModule } from '@angular/router';
import { SpotifyHeaderModule , SpotifyLoadingModule } from '@spotify/commons/components';
import { AdminCommonsModule } from './commons/commons.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { SearchArtistComponent } from './views/search-artist/search-artist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from './commons/http/services.module';
import { InterceptorsModule } from './commons/http/interceptors.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SpotifyErrorsModule } from '@spotify/commons/interceptors';
import { SpotifySessionModule } from '@spotify/commons/services';

@NgModule({
    declarations: [
    PrivateComponent,
    ArtistDetailComponent,
    NewReleasesComponent,
    SearchArtistComponent
    ],
    imports: [
    RouterModule,
    SpotifyHeaderModule,
    PrivateRoutingModule,
    CommonModule,
    AdminCommonsModule,
    ReactiveFormsModule,
    ServicesModule,
    SpotifyLoadingModule,
    InterceptorsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    SpotifyErrorsModule,
    SpotifySessionModule
    ],
    exports: [  ]
  })
  export class PrivateModule { }
