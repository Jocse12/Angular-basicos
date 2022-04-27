import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <button (click)="sumar()"> +1 </button>

        <span>{{numero}}</span>

        <button (click)="restar()"> -1 </button><br><br>

        <button (click)="acumular(2)"> acumular + 2 </button>

        <button (click)="acumular(-2)"> acumular - 2 </button>

        <br><br><br>
        <span>----------------------------------------------</span>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)"> +{{base}} </button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)"> -{{base}} </button><br><br>
    `
})
export class contadorComponent{
    title: string = 'Contador app';

    numero: number = 10;
  
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular( valor: number ){
      this.numero += valor;
    }
}