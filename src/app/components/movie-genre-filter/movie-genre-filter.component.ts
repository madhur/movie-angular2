import { MovieActions } from '../../actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { genreType } from '../../model/movie.model';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-movie-genre-filter',
  templateUrl: './movie-genre-filter.component.html',
  styleUrls: ['./movie-genre-filter.component.css']
})
export class MovieGenreFilterComponent implements OnInit {

  selectedGenre;

  genreType;

  constructor(private redux: NgRedux<any>, private movieActions: MovieActions) { }

  ngOnInit() {
    this.genreType = Object.keys(genreType);
    this.selectedGenre = genreType.allGenres;
  }

  onChange(genreValue) {
    this.redux.dispatch(<any>this.movieActions.filterMoviesByGenre(genreValue));
  }

}
