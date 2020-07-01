import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{ path: '', redirectTo: 'ingresar' },
  {
    path: '',
    component: LoginComponent,
    /*children: [
      { path: 'ingresar', component: SignInView },
      { path: 'registrarse', component: SignUpView }
    ]}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
