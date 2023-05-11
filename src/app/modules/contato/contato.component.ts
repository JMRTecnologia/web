import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  titulo = "Contate-nos"

  formContato = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    mensagem: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.minLength(11)])
  });

  ngOnInit(): void {
  }

  enviar() {
  
    if (this.formContato.valid) {

    } else {
      this.validarForm(this.formContato);
    }

  }



  validarForm(form: FormGroup) {
    Object.keys(form.controls).map(k => form.get(k)).forEach(c => c?.updateValueAndValidity());
    return form;
  }

}
