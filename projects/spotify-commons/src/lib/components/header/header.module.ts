import { SpotifyHeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ SpotifyHeaderComponent ],
    exports: [ SpotifyHeaderComponent ],
    imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule
    ]
  })
  export class SpotifyHeaderModule { }
