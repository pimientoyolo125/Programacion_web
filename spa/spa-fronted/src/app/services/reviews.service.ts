import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../Modelo/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/review/pelicula/';

  getReviews(movieId: String){
    return this.http.get<Review[]>(this.Url + movieId);
  }
}
