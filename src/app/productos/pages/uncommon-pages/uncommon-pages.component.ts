import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css'],
})
export class UncommonPagesComponent {
  public name: string = 'gerson';
  public gender:'male' | 'female' = 'male'
  public intationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }


  changeClient(){
    this.name = 'Melissa'
    this.gender = 'female'
  }

   public clientes: string[] = ['hector','mario','perla','mayra','gus','oscar','eli','miguelito'] 
   public clientesMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
   }

   deleteClient(){
    this.clientes.shift()
  
  }

}
