import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';

const routes: Routes = [
  {path:'',component:BasicPagesComponent},
  {path:'number',component:NumberPagesComponent},
  {path:'uncommon',component:UncommonPagesComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
