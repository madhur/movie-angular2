import { MovieService } from '../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getMoviesList();

  }

}
