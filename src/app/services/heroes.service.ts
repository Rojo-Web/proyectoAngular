import { Injectable } from '@angular/core';
import { heroe } from '../interfaces/heroe.interface';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:heroe[] = [

    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "../../assets/Linterna.jpg",
      aparicion: "1940-06-01",
      casa: "DC",
      id:5
    },
    
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "../../assets/Daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel",
      id:3
    },

    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "../../assets/spiderman.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel",
      id:6
    },
    
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "../../assets/Aquaman.jpg",
      aparicion: "1941-11-01",
      casa:"DC",
      id:1
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "../../assets/batman.jpg",
      aparicion: "1939-05-01",
      casa:"DC",
      id:2
    },
    
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "../../assets/Hulk.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel",
      id:4
    },
    
    
    
  ];

  constructor() { 
    

  }

  getHeroes():heroe[]{
    return this.heroes;

  }
  getHeroe(idx:number){
    return this.heroes[idx-1];
  }

}