import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  constructor(private http: HttpClient) {
    super("cliente")
  }

  consultarTodos() {
    return this.http.get(`${this.endPoint}`)
  }

}
