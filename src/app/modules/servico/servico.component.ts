import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/shared/services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  constructor(private servicoService: ServicoService) { }
  
  titulo = "Contratar Nossos Serviços?";

  subTitulo = "POR QUE";

  data: any;

  ngOnInit(): void {
    this.consultarTodos()
  }

  consultarTodos() {
    this.servicoService.consultarTodos().subscribe(res => {      
      this.data = res
    }, err => {
      console.log(err);
    })
  }

}
