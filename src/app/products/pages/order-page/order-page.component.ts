import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {

  public isUpperCase: boolean = false;

  public sortValue: keyof Hero = 'name';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batmab',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    }
  ]

  toggleUpperCase = () => this.isUpperCase = !this.isUpperCase;

  changeOrder(value: keyof Hero):void {
    this.sortValue = value;
  }

}
