import { Component, OnInit } from '@angular/core';

import { BookModel } from 'src/app/models/book.model';
import { MovieModel } from 'src/app/models/movie.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  books: BookModel[];
  movies: MovieModel[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getMovies();
  }

  getBooks() {
    return this.service.getBooks().subscribe(r => {
      this.books = r;
    })
  }

  getMovies() {
    return this.service.getMovies().subscribe(r => {
      this.movies = r;
    })
  }
}
