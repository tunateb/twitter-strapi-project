import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { TweetformComponent } from './components/tweetform/tweetform.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SignupPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    NavbarComponent,
    ProfileHeaderComponent,
    ProfileCardComponent,
    HomepageComponent,
    TweetCardComponent,
    TweetformComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
