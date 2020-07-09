import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TweetDetailsPageComponent } from './pages/tweet-details-page/tweet-details-page.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'users/:id', component: ProfilePageComponent },
  { path: 'tweets/:id', component: TweetDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
