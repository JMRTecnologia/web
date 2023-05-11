import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  data: any

  titulo = 'CLIENTES';

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos() {
    this.clienteService.consultarTodos().subscribe(res => {      
      this.data = res
    }, err => {
      console.log(err);
    })
  }

}
