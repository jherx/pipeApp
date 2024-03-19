import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent {

  public nameLower:string = 'gerson'
  public nameUpper:string = 'GERSON'
  public fullname:string  = 'gErsON'
  public customDate:Date  = new Date();
  
  

}
