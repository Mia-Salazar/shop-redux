import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = "https://the-one-api.dev/v2";
  private token = "1PPwItnHWas1rgsOp-5-";

  constructor(private http: HttpClient) { }

  setheader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  getBooks(){
    return this.http.get(`${this.url}/book`).pipe(
      map(r => r)
    );
  }

  getMovies(){
    return this.http.get(`${this.url}/movie`, { headers: this.setheader() }).pipe(
      map(r => r)
    );
  }
}
