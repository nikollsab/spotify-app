import { Component, OnInit, Input, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'events';

interface HeaderOption {
  title: string;
  url: string;
}

@Component({
  selector: 'spotify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SpotifyHeaderComponent implements OnInit {
  @Input() brandUrl: string;
  @Input() brand: string;
  @Input() logo: string;
  @Input() options: HeaderOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
