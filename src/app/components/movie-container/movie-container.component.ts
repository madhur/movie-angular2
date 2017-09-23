import { MovieActions } from '../../actions/movie.actions';
import { MovieService } from '../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import {NgRedux} from  '@angular-redux/store';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {

  constructor(private movieActions: MovieActions, private redux: NgRedux<any>) { }

  ngOnInit() {

    this.redux.dispatch(<any>this.movieActions.getMovie());

  }

}
