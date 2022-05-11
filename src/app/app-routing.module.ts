import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlarmHomeComponent } from './alarm-home/alarm-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'home/todo', component: TodoListComponent},
  {path: 'login/register', component:RegisterComponent},
  {path: 'home/home/topheading', component: TopheadingComponent},
  {path: 'home/home/topheading/businessnews', component: BusinessnewsComponent},
  {path: 'home/home/topheading/technews', component: TechnewsComponent},
  { path: 'home/home/home/home/search', component: SearchComponent },
  { path: 'artist/:id/search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  {path: 'home/home/alarm-home', component: AlarmHomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
