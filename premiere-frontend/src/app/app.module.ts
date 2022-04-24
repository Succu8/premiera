import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CinemaComponent } from './components/cinema-list/cinema/cinema.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MovieComponent } from './components/gallery/movie/movie.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MainModule} from "./components/main/main.module";
import { AdminComponent } from './components/admin/admin.component';
import { AdminCinemaComponent } from './components/admin/admin-cinema/admin-cinema.component';
import { AdminMovieComponent } from './components/admin/admin-movie/admin-movie.component';
import { AdminScheduleComponent } from './components/admin/admin-schedule/admin-schedule.component';
import { LoginComponent } from './components/admin/login/login.component';
import {MovieScheduleComponent} from "./components/gallery/movie/movie-schedule/movie-schedule.component";
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    GalleryComponent,
    MovieComponent,
    AdminComponent,
    AdminCinemaComponent,
    AdminMovieComponent,
    AdminScheduleComponent,
    LoginComponent,
    MovieScheduleComponent,
    CinemaListComponent

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        MainModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
