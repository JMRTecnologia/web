import { Component, OnInit } from '@angular/core';
import { QuemSomosService } from 'src/app/shared/services/quem-somos.service';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit {

  constructor(private quemSomosService: QuemSomosService) { }

  titulo = "QUEM SOMOS";
  subTitulo = "A JMR Technology atua no mercado de desenvolvimento de Sistemas Web conforme as necessidades dos clientes.";

  data: any;

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos() {
    this.quemSomosService.consultarTodos().subscribe(res => {      
      this.data = res
    }, err => {
      console.log(err);
    })
  }

}
