import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Daniel";
  userContac = {
    email: "danielLucas@gmail.com",
    cell: 1565695265,
    street: "edefldju, 652",
  };

  title = 'projeto';
}
