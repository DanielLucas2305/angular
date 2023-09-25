import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-numb',
  templateUrl: './change-numb.component.html',
  styleUrls: ['./change-numb.component.css']
})
export class ChangeNumbComponent {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() mudar: EventEmitter<any> = new EventEmitter();

  handleClick(){
    //console.log('Mudou o numero !');
    this.change.emit();
  };
  otherClick(){
    this.mudar.emit();
  };
}
