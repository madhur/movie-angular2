import { MovieActions } from '../../actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchText;

    

  constructor(private redux: NgRedux<any>, private movieActions: MovieActions) { }

  ngOnInit() {
  }

  searchChange($event) {
    
    this.redux.dispatch(<any>this.movieActions.searchMovie(this.searchText));
  }

}
