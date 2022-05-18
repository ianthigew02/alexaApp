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
import { InputCardComponent } from './components/input-card/input-card.component';
import { CardComponent } from './components/card/card.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material/material.module';
import { TopheadingComponent } from './topheading/topheading.component';
import { FoxnewsComponent } from './foxnews/foxnews.component';
import { CNNnewsComponent } from './cnn-news/cnn-news.component';
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
import { AlarmHomeComponent } from './alarm-home/alarm-home.component';
import { AlarmService } from './_services/alarm.service';
import { ClockComponent } from './clock/clock.component';
import { AlarmInputComponent } from './alarm-input/alarm-input.component';
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule } from  '@angular/material/input';
import {MatIconModule } from  '@angular/material/icon';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './components/alert/alert.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesComponent } from './components/game/game.component';
import { InputCardWatchComponent } from './components/input-card-watch/input-card-watch.component';
import { CardWatchComponent } from './components/card-watch/card-watch.component';


const MY_NATIVE_FORMATS = {
    fullPickerInput: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
    timePickerInput: {hour: 'numeric', minute: 'numeric', second: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    InputCardComponent,
    CardComponent,
    InputCardWatchComponent,
    CardWatchComponent,
    TodoListComponent,
    SidebarComponent,
    TopheadingComponent,
    FoxnewsComponent,
    CNNnewsComponent,
    SearchComponent,
    ArtistComponent,
    NoimagePipe,
    HomePipe,
    CardsComponent,
    LoadingComponent,
    AlarmHomeComponent,
    ClockComponent,
    AlarmInputComponent,
    AlarmListComponent,
    AlertComponent,
    GamesListComponent,
    GamesComponent

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
    NgxPaginationModule,

    // NG Store
    StoreModule.forRoot(reducers),

    // OwlDateTime Picker
    OwlDateTimeModule,
    OwlNativeDateTimeModule,

    // Materials
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [ {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS}, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NewsapiservicesService,SpotifyService,AlarmService,fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
