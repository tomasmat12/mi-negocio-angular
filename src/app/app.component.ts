import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: 'mi-negocio-angular') {
    throw new Error('Method not implemented.');
  }
  year = new Date(). getFullYear();
}
