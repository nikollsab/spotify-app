import { Component, OnInit } from '@angular/core';
import { NewReleasesPresenter } from './new-releases.presenter';
import { Album } from '../../interfaces/album-response.interface';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss'],
  providers: [ NewReleasesPresenter ]
})
export class NewReleasesComponent implements OnInit {

  constructor( public presenter: NewReleasesPresenter )
  { }

  ngOnInit(): void {
  this.presenter.initial();
  this.presenter.loadNewReleases();
  }

}

