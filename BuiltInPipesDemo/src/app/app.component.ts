import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // today: Date = new Date();
  Titiel='Angualr pipes';
  myName='vedant';
  amount=999;
  num=123.34324453465467

  student={
    name:"vedant",
    age:22

  }

  birthdate:any;

  gender='male'
  genderMapping={
    'male':'Mr.',
    'female':'Ms.'
  }

}
