import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-itens',
  templateUrl: './card-itens.component.html',
  styleUrls: ['./card-itens.component.css']
})
export class CardItensComponent implements OnInit {

  constructor() { }

  @Input()
  cliente: any

  ngOnInit(): void {
  }

}
