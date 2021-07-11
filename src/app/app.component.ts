import { Component } from '@angular/core';

// This is the component metadata declared in a decorator
@Component({
  selector: 'app-root',
  template:
    `
    <h1>{{appTitle}}</h1>
    <div>
        <cp-itemlist></cp-itemlist>
    </div>`
})
export class AppComponent {
  title: string = 'ng-apm'; // propertyName: data type
  appTitle: string = "Personal management app";
}
