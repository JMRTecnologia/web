import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  enviarEmail(form: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(environment.emailUrl,
      { name: form.nome, replyto: form.email, message: form.mensagem + "\n\nTelefone: " + form.telefone },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
