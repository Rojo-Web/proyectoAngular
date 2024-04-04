import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  visualizacion:string = 'grid';
  cargando:boolean = false;
  infoHeroesBD:any;

  heroes:heroe[] = [];

  // constructor( private data:HeroesService){
  //    this.heroes = data.getHeroes();
  //    console.log(this.heroes);
  // }

  constructor( private _heroesService:HeroesService,
    private router:Router,
    private dataBD: HeroesService,
    private _heroesBDService:HeroesBDService,
    ){

  }

  //async cargarHeores
}
