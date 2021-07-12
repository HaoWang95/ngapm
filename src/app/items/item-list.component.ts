import { Component, OnInit } from '@angular/core';
import { Iitem } from './item';

@Component({
    selector: 'cp-itemlist',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
    description: string = "My list";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _filterBy: string = '';
    get filterBy(): string {
        return this._filterBy; 
    }
    set filterBy(filterBy: string) { 
        this._filterBy = filterBy;
        this.filteredItems = this.performFilter(this._filterBy);
        console.log(this.filteredItems)
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._filterBy = 'cart';
    }
    items: Iitem[] = [
        {
            "productId": 1,
            "productName": "Computer system, a programmer's perspective",
            "productCode": "ISBN-XXX",
            "releaseDate": "March 18,2019",
            "description": "The book that you must read to be a programmer",
            "price": 80,
            "rating": 5,
            "imageUrl": "",
        },
        {
            "productId": 5,
            "productName": "High Performance MySql",
            "productCode": "ISBN-XXX",
            "releaseDate": "March 18,2019",
            "description": "The book that you must read to be a programmer",
            "price": 80,
            "rating": 5,
            "imageUrl": "",
        }
    ];
    filteredItems: Iitem[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(value: string): Iitem[]{
        return this.items.filter(
            (item: Iitem) => item.productName.toLocaleLowerCase().includes(value)
        )
    }
}