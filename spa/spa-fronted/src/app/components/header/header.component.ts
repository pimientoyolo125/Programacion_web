import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  movieTitle!: string;
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  buscarPeliculas(): void {
    // Puedes realizar el filtrado o cualquier otra lógica aquí
    this.router.navigate(['/movies'], { queryParams: { q: this.movieTitle } });
  }

}
