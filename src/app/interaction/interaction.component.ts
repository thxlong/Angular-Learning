import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild('movieList') movieListConpoment!: MovieListComponent;
  // movie: chứa giá trị bộ phim được tạo mới
  newMovie: any;
  constructor() {}

  ngOnInit(): void {}

  handlerAddMovie(movie: any) {
    console.log(movie);

    // ? Cách 1
    // this.newMovie = new movie();

    // ? Cách 2
    this.movieListConpoment.movieList.push(movie);
  }
}
