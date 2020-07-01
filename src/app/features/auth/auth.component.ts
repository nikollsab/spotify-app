import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
  })
  export class AuthComponent implements OnInit {
    header = {
      brandUrl: '/',
      brand: 'Music App',
      logo: 'assets/logo.png',
      options: [
        { title: 'Premium', url: '/premium' },
        { title: 'Ayuda', url: '/help' },
        { title: 'Iniciar Sesión', url: '/login' },
      ]
    };
    constructor( ) { }

    ngOnInit(): void {
    }

  }
