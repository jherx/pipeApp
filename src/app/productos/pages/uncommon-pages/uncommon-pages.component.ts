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

}
