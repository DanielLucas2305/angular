import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  size = 16;
  font = 'comic sans-serif';
  color = 'blue';

  classes = ["green-title", "small-title"];

  sublinhado = "sublinhado-title";
}
