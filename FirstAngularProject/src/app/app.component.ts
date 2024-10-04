import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProject';

  num:any=10;

  arr=[1,2,3];

  // property Binding 

  wantToDisable=false;

  // Event Binding 
  clickMe(){
    const a=10;
    const b=20;
    console.log(a+b);
  }

  mouseOver()
  {
    alert("mouse over");
  }

  myVal=77;
}
