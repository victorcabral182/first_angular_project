import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado');
  }

  cancelarCriarPensamento() {
    alert('Criação de pensamento cancelada');
  }
}
