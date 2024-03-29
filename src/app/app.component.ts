import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dad_izq = "../assets/img/dice1.png";
  dad_der = "../assets/img/dice4.png";
  num1: number = 1;
  num2: number = 2;

  tirarDados(): void{
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.num2 = Math.round(Math.random() * 5) + 1;
    this.dad_izq = "../assets/img/dice" + this.num1 + ".png";
    this.dad_der = "../assets/img/dice" + this.num2 + ".png";
  }
}
