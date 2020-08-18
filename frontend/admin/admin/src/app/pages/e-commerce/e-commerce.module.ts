import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbInputModule,
  NbTreeGridModule,
  NbFormFieldModule,
  NbAccordionModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CardProdutosComponent } from './card-produtos/card-produtos.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { CardInfoResumidoProdutosComponent } from './card-info-resumido-produtos/card-info-resumido-produtos.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    NbInputModule,
    NbEvaIconsModule,
    NbTreeGridModule,
    NbFormFieldModule,
    NbAccordionModule
  ],
  declarations: [
    ECommerceComponent,
    CardProdutosComponent,
    ListarProdutosComponent,
    NovoProdutoComponent,
    CardInfoResumidoProdutosComponent
  ],
})
export class ECommerceModule { }
