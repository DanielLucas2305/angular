import { Animal } from './../../Animal';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  animals: Animal[] = [
    { name: "Tião", type: "Papagaio", age: 5 },
    { name: "Rex", type: "Cachorro", age: 12 },
    { name: "Whiskers", type: "Gato", age: 7 },
    { name: "Nemo", type: "Peixe", age: 3 },
    { name: "Molly", type: "Hamster", age: 12 },
  ];


  detailsAnimal = '';

  showAge(animal: Animal) {
    this.detailsAnimal = `O animal ${animal.name} tem ${animal.age} anos`;
  };
}
