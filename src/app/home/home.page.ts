import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Name:Muhammad Ikram
  //City: Islamabad
  //Intrest:[Cricket,Vollyball,Poetry]
    user={
      name:'Muhammad Ikram',
      city:'Islamabad',
      intrest:['cricket','Gaming','Movies']
    };
  constructor() {}

}
