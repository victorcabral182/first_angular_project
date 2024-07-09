import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancelarCriarPensamento() {
    this.router.navigate(['/']);
  }
}
