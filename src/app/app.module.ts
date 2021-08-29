import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsernamePageComponent } from './username-page/username-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubSearchService } from './github-service/github-search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { RepositoryPageComponent } from './repository-page/repository-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    UsernamePageComponent,
    NotFoundComponent,
    DateCountPipe,
    RepositoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
