import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpotifyLoadingComponent } from './loading.component';

@NgModule({
  declarations: [SpotifyLoadingComponent],
  exports: [ SpotifyLoadingComponent ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SpotifyLoadingModule { }
