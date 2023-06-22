import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListNextMonthProjectionsComponent} from "./list-next-month-projections/list-next-month-projections.component";
import {UpcomingProjectionsInfoComponent} from "./upcoming-projections-info/upcoming-projections-info.component";
import {AddNewMovieComponent} from "./add-new-movie/add-new-movie.component"
import { MovieScreeningComponent } from './movie-screening/movie-screening.component';

const routes: Routes = [
  {path: 'movies/next-month-projections', component: ListNextMonthProjectionsComponent},
  {path: 'movies/add-new-movie', component: AddNewMovieComponent},
  {path: 'movies/upcoming-projections-info/:movieId', component: UpcomingProjectionsInfoComponent},
  {path: 'movies/add-movie-screening/:movieId', component: MovieScreeningComponent},
  {path: '', redirectTo: 'movies/next-month-projections', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
