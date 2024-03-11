import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { PrimeNgAngularModule } from '../prime-ng-angular.module';


@NgModule({
  declarations: [
    BasicPagesComponent,
    UncommonPagesComponent,
    NumberPagesComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PrimeNgAngularModule
  ]
})
export class ProductosModule { }
