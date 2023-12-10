import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(
    private location:Location) { }
    
  ngOnInit(): void{}

  Regresar():void{
    this.location.back();
  }
}
