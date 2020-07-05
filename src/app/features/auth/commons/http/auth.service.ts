import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthServicesModule } from './services.module';

@Injectable({
  providedIn: AuthServicesModule
})
export class AuthService {

  constructor() { }

  signIn() {
    return of('BQANlHM7nvaAi0TccikjhInE_Vwix1WGP86g_L45xXDi4Mb3cDcu3wCr2egcgdp0CXxj3cyd48NtUJjVdFnJJZ0GTbef8v9FnrTq8Ro77HAw3LaK_YALy-QWPaTxgKzIBN1yPnXEQhsWdvGg3dtO1nlr_J0-5CSj-Q0');
  }

}
