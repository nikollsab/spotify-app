import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyAuthenticatedGuard } from '@spotify/commons/guards';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/portal/public.module').then(m => m.PublicModule)
  },
  {
    path: 'spotify',
    canActivate: [SpotifyAuthenticatedGuard],
    loadChildren: () => import('./features/admin/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
