import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie;
  rating;

  constructor() { }

  ngOnInit() {
    this.rating = this.movie.get('rate');
  }

  getMovieImage(movie) {
    return '/assets/images/movie-covers/' + movie.get('img');
  }

  openMovieDetail(movie) {
    console.log('clicked movie');

  }

}
