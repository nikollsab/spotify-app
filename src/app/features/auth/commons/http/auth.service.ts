import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthServicesModule } from './services.module';

@Injectable({
  providedIn: AuthServicesModule
})
export class AuthService {

  constructor() { }

  signIn() {
    return of('BQBBh1Qx2AFPhk4ISN2_BMfjgSUSONEvUuWQ8oZ_n1k-aT2DJJ1mOtKA5sidD0KIUQak3jjKtfGBBxTaIA8');
  }

}
