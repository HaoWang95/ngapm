import { Component } from '@angular/core';

@Component({
    selector: 'cp-itemlist',
    templateUrl: './item-list.component.html',
})
export class ItemListComponent {
    description: string = "My list";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterBy: string = 'default';
    items: any[] = [
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}