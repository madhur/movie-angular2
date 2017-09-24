import { Observable } from 'rxjs/Rx';
import { MovieActions } from '../../actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {

  private numMovies;

  @select(['movies_app', 'filtered_movies'])
  private moviesList$: Observable<any>;

  constructor(private movieActions: MovieActions, private redux: NgRedux<any>) { }

  ngOnInit() {

    this.redux.dispatch(<any>this.movieActions.getMovies());

    this.moviesList$.subscribe(data => {
      if (data != null) {
        this.numMovies = data.size;
      }

    });
  }
}
