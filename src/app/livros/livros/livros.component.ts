import { Component } from '@angular/core';
import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
  livros: Observable<Livro[]>;
  displayedColumns = ['nome', 'categoria']

  //livrosService: LivrosService;

  constructor(private livrosService: LivrosService){
    //this.livrosService = new LivrosService();
    this.livros = this.livrosService.list();
  }
}
