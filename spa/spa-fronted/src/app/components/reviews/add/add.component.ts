import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { ReviewsService } from 'src/app/services/reviews.service';
import { Router } from '@angular/router';
import { Review } from 'src/app/Modelo/Review';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  movieId!: string;
  review:Review = new Review();
  constructor(
    private location:Location,
    private router:Router,
    private service:ReviewsService) { }
    
  ngOnInit(): void{}

  Guardar(){
    this.service.createReview(this.review).subscribe({
      next: data =>{
      console.log(data);
      alert("Se agrego con Éxito...!!!")
      this.router.navigate(['listar/:movieId']);
      }
    });
  }

  guardarSubmit(){
    this.Guardar();
  }

  Regresar():void{
    this.location.back();
  }
}
