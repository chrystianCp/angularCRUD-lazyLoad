import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pipe, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit{

  heroId = this.activatedRoute.params.pipe(map(p => console.log(p)));
  
  constructor(private activatedRoute: ActivatedRoute){}


  ngOnInit(): void {
    console.log(this.heroId);
      
  }


  @Input() heroe!:Heroe;
 
 
}
