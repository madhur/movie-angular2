import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie;
  rating;

  constructor(private router: Router) { }

  ngOnInit() {
    this.rating = this.movie.get('rate');
  }

  getMovieImage(movie) {
    return '/assets/images/movie-covers/' + movie.get('img');
  }

  openMovieDetail(movie) {
    this.router.navigate(['movie', movie.get('key')]);
  }

}
