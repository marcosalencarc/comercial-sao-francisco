import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  produtos = [{ codigo: 123, nome: 'Achoc. Chocolatto', categoria: 'Biscoitos e Matinais', marca: '3 corações', preco: '10,30', estoque: '100/120' },
  { codigo: 123, nome: 'Achoc. Chocolatto', categoria: 'Biscoitos e Matinais', marca: '3 corações', preco: '10,30', estoque: '100/120' },
  { codigo: 123, nome: 'Achoc. Chocolatto', categoria: 'Biscoitos e Matinais', marca: '3 corações', preco: '10,30', estoque: '100/120' },
  { codigo: 123, nome: 'Achoc. Chocolatto', categoria: 'Biscoitos e Matinais', marca: '3 corações', preco: '10,30', estoque: '100/120' },
  { codigo: 123, nome: 'Achoc. Chocolatto', categoria: 'Biscoitos e Matinais', marca: '3 corações', preco: '10,30', estoque: '100/120' },
  ]

}
