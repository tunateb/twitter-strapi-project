import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'me', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
