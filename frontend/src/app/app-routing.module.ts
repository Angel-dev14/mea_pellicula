import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListNextMonthProjectionsComponent} from "./list-next-month-projections/list-next-month-projections.component";
import {UpcomingProjectionsInfoComponent} from "./upcoming-projections-info/upcoming-projections-info.component";
import {MovieScreeningSeatsComponent} from './cinema-room-seats/movie-screening-seats.component';

const routes: Routes = [
  {path: 'movies/next-month-projections', component: ListNextMonthProjectionsComponent},
  {path: 'movies/upcoming-projections-info/:movieId', component: UpcomingProjectionsInfoComponent},
  {path: 'movies/movie-screening-seats/:movieScreeningId', component: MovieScreeningSeatsComponent},
  {path: '', redirectTo: 'movies/next-month-projections', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
