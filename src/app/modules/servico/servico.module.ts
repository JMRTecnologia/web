import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ItensComponent } from './itens/itens.component';



@NgModule({
  declarations: [
    ServicoComponent,
    ItensComponent
  ],
  exports: [ServicoComponent],
  imports: [
    CommonModule
  ]
})
export class ServicoModule { }
