import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

    movie!: any;
    constructor(
      private movieService: MoviesService,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params:any) => {
      this.movieService.buscarPeliculaPorId(params.movieId).subscribe(response => {
        this.movie = response;
      })
    })
  }  

  }
