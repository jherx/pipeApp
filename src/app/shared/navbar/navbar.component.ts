import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Pipe de angular',
              icon: 'pi pi-desktop',
              items: [
                  {
                    label: 'Textos y fechas',
                    icon: 'pi pi-align-left',
                    routerLink:'/'
                 
                  },
                  {
                      label: 'Numeros',
                      icon: 'pi pi-fw pi-dollar',
                      routerLink:'/number'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'No comunes',
                      icon: 'pi pi-fw pi-globe',
                      routerLink:'/uncommon'
                  }
              ]
          },
          {
              label: 'Pipes Personalizados',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },

      ];
  }

}
