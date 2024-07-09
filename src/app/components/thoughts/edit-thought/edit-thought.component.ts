import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe((e) => {
      this.pensamento = e;
    });
  }
  cancelarEditarPensamento() {
    this.router.navigate(['/']);
  }
  editarPensamento() {
    this.service.editar(this.pensamento).subscribe((e) => {
      this.router.navigate(['/']);
    });
  }
}
