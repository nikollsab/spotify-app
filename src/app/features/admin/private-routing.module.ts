import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { NewReleasesComponent } from 'src/app/features/admin/views/new-releases/new-releases.component';
import { SearchArtistComponent } from 'src/app/features/admin/views/search-artist/search-artist.component';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new-releases',
  },
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'new-releases', component: NewReleasesComponent },
      { path: 'artist-detail/:id', component: ArtistDetailComponent},
      { path: 'search', component: SearchArtistComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
