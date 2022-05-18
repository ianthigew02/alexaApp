import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { CNNnewsComponent } from './cnn-news/cnn-news.component';
import { FoxnewsComponent } from './foxnews/foxnews.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlarmHomeComponent } from './alarm-home/alarm-home.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { GamesComponent } from './components/game/game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent },
  {path: 'home/todo', component: TodoListComponent},
  {path: 'login/register', component:RegisterComponent},
  {path: 'home/topheading', component: TopheadingComponent},
  {path: 'home/topheading/cnn-news', component: CNNnewsComponent},
  {path: 'home/topheading/foxnews', component: FoxnewsComponent},
  {path: 'foxnews/home/topheading', component: TopheadingComponent},
  { path: 'home/search', component: SearchComponent },
  { path: 'artist/:id/search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'home/alarm-home', component: AlarmHomeComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'profile/privacy', component: PrivacyComponent},
  { path:'games', component: GamesComponent},
  { path:'games/games-list', component: GamesListComponent},
  { path:'games-list/games', component: GamesComponent},


  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
