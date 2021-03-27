import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idade: number = 22
  nome: string = ""

  lancarDado(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  adicionar(): void {
    console.log("Adicionando...")
  }

  alterarNome(inputEvent: any): void {
    console.log(inputEvent.target.value)
    this.nome = inputEvent.target.value
  }
}
