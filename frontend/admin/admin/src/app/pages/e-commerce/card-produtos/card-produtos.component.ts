import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NovoProdutoComponent } from '../novo-produto/novo-produto.component';

@Component({
  selector: 'ngx-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.scss']
})
export class CardProdutosComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  novoProduto() {
    this.open();
  }

  protected open() {
    this.dialogService.open(NovoProdutoComponent, { hasBackdrop: true, hasScroll: true });
  }

}
