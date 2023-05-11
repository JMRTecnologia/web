import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormControlExceptionModule } from 'src/app/shared/directives/form-control-exception/form-control-exception.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    ContatoComponent
  ],
  exports: [ContatoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormControlExceptionModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ]
})
export class ContatoModule { }
