import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookModel } from 'src/app/models/book.model';
import { MovieModel } from 'src/app/models/movie.model';
import { ServiceService } from 'src/app/services/service.service';
import { AppState } from 'src/app/store/state';
import { loadBooks } from '../../store/actions/books.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  books: BookModel[];
  movies: MovieModel[];

  constructor(private service: ServiceService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getBooks();
    this.getMovies();
  }

  getBooks() {
    this.store.dispatch(loadBooks());
    this.store.select('books').subscribe((state: any) => {
      this.books = state.books;
    })

    //The redux effect is the same as
    // return this.service.getBooks().subscribe(r => {
    //   this.books = r;
    // })
  }

  getMovies() {
    return this.service.getMovies().subscribe(r => {
      this.movies = r;
    })
  }
}
