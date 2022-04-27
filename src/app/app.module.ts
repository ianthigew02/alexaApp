import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { InputCardComponent } from './components/input-card/input-card.component';
import { CardComponent } from './components/card/card.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material/material.module';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { NewsapiservicesService } from './service/newsapiservices.service';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import {NgxPaginationModule} from 'ngx-pagination';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { HomePipe } from './pipes/home.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardsComponent } from './components/cards/cards.component';
import { SpotifyService } from './service/spotify.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    InputCardComponent,
    CardComponent,
    TodoListComponent,
    SidebarComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SearchComponent,
    ArtistComponent,
    NoimagePipe,
    HomePipe,
    CardsComponent,
    LoadingComponent

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    NgxPaginationModule

  ],
  providers: [NewsapiservicesService,SpotifyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
