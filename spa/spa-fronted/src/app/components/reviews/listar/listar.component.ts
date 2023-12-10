import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/Modelo/Review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  resenas!: Review[];
  constructor(private service:ReviewsService, private router:Router){}

  ngOnInit(){
    this.service.getReviews().subscribe(data=>{
      this.resenas = data;
    })
  }
  
}
