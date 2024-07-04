import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: '',
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
