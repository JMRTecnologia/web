import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class QuemSomosService extends BaseService {

  constructor(private http: HttpClient) {
    super("quem_somos")
  }

  consultarTodos() {
    return this.http.get(`${this.endPoint}`)
  }

}
