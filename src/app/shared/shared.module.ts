import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNgAngularModule } from '../prime-ng-angular.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgAngularModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
