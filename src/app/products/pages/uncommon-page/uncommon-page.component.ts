import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select

  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clientes: string[] = ['Maria', 'Hugo', 'Nicolas', 'Felipe'];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clientes.pop();
  }

  // keyvalue pipe

  public person = {
    name: 'Nicolas',
    age: '34',
    country: 'Chile'
  }

  // async pipe

  public myObservableTimer = interval(2000).pipe(
    tap( (value: number) => console.log('tap', value) )
  )

  public promiseValue: Promise<string> = new Promise( ( resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa');
      this.person.name = 'Javier';
    }, 3500)
  })
}
