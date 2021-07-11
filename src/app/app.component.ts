import { Component } from '@angular/core';

// This is the component metadata declared in a decorator
@Component({
  selector: 'app-root',
  template:
    `<div>
        <h1>{{title}}</h1>
    </div>`
})
export class AppComponent {
  title: string = 'ng-apm'; // propertyName: data type
}
