import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Header {
  menu = [
    {
      title: 'Home',
      link: '/home',
      selected: true,
      isLeft: true,
    },
    {
      title: 'Menu',
      link: '/menu',
      selected: false,
      isLeft: true,
    },
    {
      title: 'About',
      link: '/about',
      selected: false
    },
    {
      title: 'Order Now',
      link: '/order-now',
      selected: false,
    } 
  ]
  menuSelected(title: string) {
    this.menu.forEach(item => item.selected = (item.title === title));
  }
}
