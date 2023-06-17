import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListNextMonthProjectionsComponent} from "./list-next-month-projections/list-next-month-projections.component";

const routes: Routes = [
  {path: 'movies/next-month-projections', component: ListNextMonthProjectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
