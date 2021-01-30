import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType }from '@ngrx/effects';
import { mergeMap, tap, map } from 'rxjs/operators';

import { ServiceService } from 'src/app/services/service.service';
import { loadBooks, loadBooksSuccessfully } from '../actions/books.actions';

@Injectable()

export class booksEffects {
    constructor(
        private actions$: Actions,
        private service: ServiceService
    ){}

    loadBooks$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadBooks),
            tap(data => console.log('effect',data)),
            mergeMap(
                () => this.service.getBooks().pipe(
                    tap(data => console.log('effect user', data)),
                    map(books => loadBooksSuccessfully ({books: books}))
                )
            )
        )
    )
}