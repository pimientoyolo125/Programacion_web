import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Modelo/Review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  resenas!: Review[];
  movieId!: string;
  constructor(
    private service:ReviewsService, 
    private route:ActivatedRoute, 
    private router:Router){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.movieId = params['movieId'];
    });

        this.service.getReviews(this.movieId).subscribe(data => {
        this.resenas = data;
      })
    }
  
}
