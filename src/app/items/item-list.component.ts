import {Component} from '@angular/core';

@Component({
    selector:'cp-itemlist',
    templateUrl:'./item-list.component.html',
})
export class ItemListComponent {
    description: string = "My list";
    items: any[] = [];
}