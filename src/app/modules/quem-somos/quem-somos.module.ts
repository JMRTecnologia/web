import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { ItensComponent } from './itens/itens.component';



@NgModule({
  declarations: [QuemSomosComponent, ItensComponent],
  exports: [QuemSomosComponent],
  imports: [
    CommonModule
  ]
})
export class QuemSomosModule { }
