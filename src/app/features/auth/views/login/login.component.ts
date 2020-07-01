import { Component, OnInit } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { SpotifyService } from '../../../admin/commons/http/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginPresenter, SpotifyService ]
})
export class LoginComponent implements OnInit {

  constructor( public presenter: LoginPresenter) { }

  ngOnInit(): void {  }
}
