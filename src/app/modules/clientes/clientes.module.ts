import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { CardItensComponent } from './card-itens/card-itens.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ClientesComponent,
    CardItensComponent
  ],
  exports: [ClientesComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ClientesModule { }
