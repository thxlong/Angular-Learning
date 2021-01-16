import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  movieList: any[] = [
    { id: 1, name: 'SOUL', price: 8000, image: 'assets/img/soul.jpg' },
    {
      id: 2,
      name: 'INCREDIBLE',
      price: 9000,
      image: 'assets/img/incredibles.jpeg',
    },
    {
      id: 3,
      name: 'FINDING NEMO',
      price: 10000,
      image: 'assets/img/nemo.jpeg',
    },
    { id: 4, name: 'UP', price: 7000, image: 'assets/img/up.jpeg' },
  ];
  constructor() {}

  @Input() newMovie: any;

  // ? Lifecycle ngOnChanges sẽ chạy sau khi Input thay đổi
  // ? Cách 1 dùng truyền input
  ngOnChanges(changes: any) {
    // const { newMovie } = changes;
    // console.log(changes);
    // const movieUpdate = changes.newMovie.currentValue;
    // if (movieUpdate && newMovie?.currentValue?.id !== newMovie?.previous?.id) {
    //   this.movieList.push(movieUpdate);
    // }
  }

  handleDeleteMovie(movieId: number) {
    this.movieList = this.movieList.filter((movie) => {
      return movie.id !== movieId;
    });
  }

  ngOnInit(): void {}
}
