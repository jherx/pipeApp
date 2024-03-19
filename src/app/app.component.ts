import { Component } from '@angular/core';


// configuracion del locale

import localeEsMx  from "@angular/common/locales/es-MX";
import localefr  from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";
import locale from '@angular/common/locales/es-MX';

registerLocaleData(localeEsMx)
registerLocaleData(localefr)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  title = 'pipeApp';  

}
