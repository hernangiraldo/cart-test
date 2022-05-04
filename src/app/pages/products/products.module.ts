import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
