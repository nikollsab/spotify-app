import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { SpotifyBannerModule, SpotifyHeaderModule } from '@spotify/commons/components';
import { RouterModule } from '@angular/router';
import { PortalCommonsModule } from './commons/commons.module';
import { PublicRoutingModule } from './public-routing-module';
import { AuthServicesModule } from '../auth/commons/http/services.module';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from '../admin/commons/http/interceptors.module';



@NgModule({
    declarations: [
    PublicComponent
    ],
    imports: [
        SpotifyBannerModule,
        SpotifyHeaderModule,
        RouterModule,
        PortalCommonsModule,
        PublicRoutingModule,
        AuthServicesModule,
        HttpClientModule,
        InterceptorsModule,

    ]
  })
  export class PublicModule { }
