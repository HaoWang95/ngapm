import { Component, OnInit } from '@angular/core';
import { Iitem } from './item';
import { ItemService } from './item.service';

@Component({
    selector: 'cp-itemlist',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
    providers:[ItemService]
})
export class ItemListComponent {

    description: string = "My list";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _filterBy: string = '';
    constructor(private itemService: ItemService){}
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
        this.items = this.itemService.getItems();
        this.filteredItems = this.items;
    }
    items: Iitem[] = [];
    filteredItems: Iitem[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(value: string): Iitem[]{
        return this.items.filter(
            (item: Iitem) => item.productName.toLocaleLowerCase().includes(value)
        )
    }

    onRatingClicked(value: number): void{
        this.description= `Rating ${value.toString()} is clicked`
    }
}