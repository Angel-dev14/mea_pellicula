import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListNextMonthProjectionsComponent} from './list-next-month-projections/list-next-month-projections.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieCardComponent} from './movie-card/movie-card.component';
import {UpcomingProjectionsInfoComponent} from './upcoming-projections-info/upcoming-projections-info.component';
import {UpcomingProjectionCardComponent} from './upcoming-projection-card/upcoming-projection-card.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNextMonthProjectionsComponent,
    MovieCardComponent,
    UpcomingProjectionsInfoComponent,
    UpcomingProjectionCardComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    AddNewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
