import { Injectable } from "@angular/core";
import { Iitem } from "./item";

@Injectable({
    providedIn: 'root'
})
export class ItemService{
    getItems():Iitem[]{
        return [
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
                "rating": 3,
                "imageUrl": "",
            }
        ];
    }
}