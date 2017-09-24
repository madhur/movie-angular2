import { MovieActions } from '../../actions/movie.actions';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @select(['movies_app', 'selected_movie'])
  private movie: Observable<any>;

  constructor(
    private route: ActivatedRoute, 
    private movieActions : MovieActions,
    private redux: NgRedux<any>
  ) { }

  ngOnInit() {
    let movieKey = this.route.snapshot.params['movieKey'];

    this.redux.dispatch(<any>this.movieActions.getMovieByKey(movieKey));

  }

  getMovieImage(movie) {
    return '/assets/images/movie-covers/' + movie.get('img');
  }

}
