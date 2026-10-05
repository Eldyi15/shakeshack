import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

}
