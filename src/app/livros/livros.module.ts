import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule
  ]
})
export class LivrosModule { }
