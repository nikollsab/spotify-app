import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyErrorsInterceptor } from './errors.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: SpotifyErrorsInterceptor,
    multi: true
    }
    ],
  imports: [
  MatSnackBarModule
  ]
})
export class SpotifyErrorsModule { }
