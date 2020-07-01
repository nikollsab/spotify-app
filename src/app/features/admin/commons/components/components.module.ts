import { NgModule } from '@angular/core';
import { MusicItemComponent } from './music-item/music-item.component';
import { CommonModule } from '@angular/common';
import { SpotifyLoadingModule } from '@spotify/commons/components';


@NgModule({
    declarations: [
    MusicItemComponent
     ],
    imports: [
      CommonModule
      ],
    exports: [
    MusicItemComponent
      ]
  })
  export class AdminComponentsModule { }


