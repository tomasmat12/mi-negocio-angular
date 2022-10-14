import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-negocio-angular' ;
  year = new Date(). getFullYear();
}


//https://github.com/angular/angular-cli/issues/11145