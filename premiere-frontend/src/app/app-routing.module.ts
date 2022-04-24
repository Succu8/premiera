import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CinemaComponent} from "./components/cinema-list/cinema/cinema.component";
import {MovieComponent} from "./components/gallery/movie/movie.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {CinemaListComponent} from "./components/cinema-list/cinema-list.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminCinemaComponent} from "./components/admin/admin-cinema/admin-cinema.component";
import {AdminMovieComponent} from "./components/admin/admin-movie/admin-movie.component";
import {AdminScheduleComponent} from "./components/admin/admin-schedule/admin-schedule.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'movie_list', component: GalleryComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'cinemas', component: CinemaListComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'admin_cinemas', component:AdminCinemaComponent},
      {path: 'admin_movie', component:AdminMovieComponent},
      {path: 'admin_schedule', component:AdminScheduleComponent}
    ]
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}

