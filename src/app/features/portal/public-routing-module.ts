import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PremiumComponent } from './commons/components/premium/premium.component';
import { HelpComponent } from './commons/components/help/help.component';
import { HomeComponent } from './commons/components/home/home.component';
import { LoginComponent } from '../auth/views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'help', component: HelpComponent },
      { path: 'home', component: HomeComponent},
      { path: 'premium', component: PremiumComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
