import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((e) => {
      this.listaPensamentos = e;
    });
  }
}
