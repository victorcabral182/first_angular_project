import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}
  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API);
  }
  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamento>(url, pensamento);
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamento>(url);
  }
}
