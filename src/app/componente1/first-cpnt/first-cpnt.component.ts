import { Component } from '@angular/core';

@Component({
  selector: 'app-first-cpnt',
  templateUrl: './first-cpnt.component.html',
  styleUrls: ['./first-cpnt.component.css']
})
export class FirstCpntComponent {
  soma: number = 51 + 10;
  nome: String = 'Daniel';
  hobbies = ["correr", "nadar", "dormir"];
  car = {
    name: "Golf GTI",
    year: 2016,
  };

}
