import { Component } from '@angular/core';
import { Heroi } from '../heroi';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroi: Heroi = {
    id: 1,
    nome: 'Homem-Aranha'
  };
}
