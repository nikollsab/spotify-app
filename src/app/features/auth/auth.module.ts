import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { AuthUiModule } from './commons/ui/ui.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpotifyHeaderModule } from '@spotify/commons/components';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../admin/commons/http/services.module';
import { AuthServicesModule } from './commons/http/services.module';
import { SpotifyBannerModule } from '@spotify/commons/components';


@NgModule({
    declarations: [
    LoginComponent
    ],
    imports: [
    AuthRoutingModule,
    SpotifyHeaderModule,
    AuthUiModule,
    FormsModule,
    AuthServicesModule,
    RouterModule,
    CommonModule,
    ServicesModule,
    SpotifyBannerModule
    ]
  })
  export class AuthModule { }
