import { Component } from '@angular/core';

@Component({
  selector: 'app-evento-out',
  templateUrl: './evento-out.component.html',
  styleUrls: ['./evento-out.component.css']
})
export class EventoOutComponent {
  myNumber: number = 0;
  onChangeNumber(){
    this.myNumber += 1;
    console.log(this.myNumber);
  }
  OnLessChangeNumber(){
    this.myNumber -= 1;
    console.log(this.myNumber);
  };
}
