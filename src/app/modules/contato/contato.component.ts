import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarProvider } from 'src/app/shared/provider/snackbar.provider';
import { StorageService } from 'src/app/shared/services/storage.service';
import { subtrairDatas } from 'src/app/shared/utils/utilitarias';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private storageService: StorageService, private msg: SnackbarProvider) { }

  titulo = "Contate-nos"

  formContato = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    mensagem: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    dataEnvio: new FormControl(null)
  });

  ngOnInit(): void {
  }

  enviar() {

    if (this.formContato.valid) {

      this.formContato.controls['dataEnvio'].setValue(new Date());

      if (this.podeEnviarNovamente()) {
        this.msg.showSnackSuccess("Entraremos em contato, aguarde!");
      } else {
        this.msg.showSnackErro("Você enviou um e-mail anteriormente, aguarde!");
      }

    } else {
      this.validarForm(this.formContato);
    }

  }

  podeEnviarNovamente(): boolean {

    let emailSalvo = this.buscarEmail();
    let dataSalvo = this.buscarData();

    if (emailSalvo == null || emailSalvo != this.formContato.value.email || subtrairDatas(dataSalvo) > 6) {
      return true;
    } 
    else {
      return false;
    }
    // else (emailSalvo == this.formContato.value.email && subtrairDatas(dataSalvo) < 6) {
    //   return false;
    // }

  }

  buscarEmail(): string {
    return this.storageService.buscarEmail();
  }

  buscarData(): string {
    return this.storageService.buscarData();
  }

  validarForm(form: FormGroup) {
    Object.keys(form.controls).map(k => form.get(k)).forEach(c => c?.updateValueAndValidity());
    return form;
  }

}
