import { Component } from '@angular/core';

// This is the component metadata declared in a decorator
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title: string = 'ng-apm'; // propertyName: data type
  appTitle: string = "Personal management app";
}
