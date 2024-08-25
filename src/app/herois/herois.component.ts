import { Component } from '@angular/core';
import { HEROIS } from '../mock-herois';
import { Heroi } from '../heroi';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrl: './herois.component.css'
})
export class HeroisComponent {
  public herois = HEROIS;
  public heroiSelecionado?: Heroi;

  public selecionar(heroi: Heroi): void {
    this.heroiSelecionado = heroi;
  }
    
}
