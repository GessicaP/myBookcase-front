import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Livro } from '../model/livro';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/assets/livros.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      tap(livros => console.log(livros))
    );
  }
}
