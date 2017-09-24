import { RatingItemComponent } from './components/rating-item/rating-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieActions } from './actions/movie.actions';
import { MovieService } from './service/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { store } from './core/build-redux-store.service';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieGenreFilterComponent } from './components/movie-genre-filter/movie-genre-filter.component';

const appRoutes: Routes = [
  { path: '', component: MovieContainerComponent },
  {path: 'movie-angular2', component: MovieContainerComponent },
  { path: 'movie/:movieKey', component: MovieDetailComponent },
  { path: 'movie-angular2/movie/:movieKey', component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieContainerComponent,
    MovieDetailComponent,
    RatingItemComponent,
    MovieSearchComponent,
    MovieGenreFilterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService, MovieActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<any>) {

    ngRedux.provideStore(store);
  }



}
