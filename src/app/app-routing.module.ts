import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { UsernamePageComponent } from './username-page/username-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search-username', component: UsernamePageComponent },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
