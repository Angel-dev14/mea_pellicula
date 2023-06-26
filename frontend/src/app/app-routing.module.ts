import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListNextMonthProjectionsComponent} from "./list-next-month-projections/list-next-month-projections.component";
import {UpcomingProjectionsInfoComponent} from "./upcoming-projections-info/upcoming-projections-info.component";
import {MovieScreeningSeatsComponent} from './cinema-room-seats/movie-screening-seats.component';
import {ReservationInfoComponent} from './tickets/reservation-info.component';
import {MovieScreeningComponent} from './movie-screening/movie-screening.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AddNewMovieComponent} from "./add-new-movie/add-new-movie.component";
import {authGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: 'movies', children: [
      { path: 'add-new-movie', component: AddNewMovieComponent },
      { path: 'upcoming-projections-info/:movieId', component: UpcomingProjectionsInfoComponent },
      { path: 'movie-screening-seats/:movieScreeningId', component: MovieScreeningSeatsComponent },
      { path: 'add-movie-screening', component: MovieScreeningComponent },
      { path: 'add-movie-screening/:movieId', component: MovieScreeningComponent },
    ], canActivateChild: [authGuard] },
  { path: 'movies/next-month-projections', component: ListNextMonthProjectionsComponent   },
  { path: 'reservation', children: [
      { path: 'reservation-info/:reservationId', component: ReservationInfoComponent },
    ], canActivateChild: [authGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
