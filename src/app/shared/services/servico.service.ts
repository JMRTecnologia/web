import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class ServicoService extends BaseService {

  constructor(private http: HttpClient) {
    super("servico")
  }

  consultarTodos() {
    return this.http.get(`${this.endPoint}`)
  }

}
