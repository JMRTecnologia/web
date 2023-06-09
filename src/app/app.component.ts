import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  navbar = [
    {
      titulo: 'Quem Somos',
      link: 'quem-somos'
    },
    {
      titulo: 'Serviços',
      link: 'servico'
    },
    // {
    //   titulo: 'Clientes',
    //   link: 'cliente'
    // },
    {
      titulo: 'Contato',
      link: 'contato'
    },
  ]


  ancora(id: string) {
    this.viewportScroller.scrollToAnchor(id)
  }

}
