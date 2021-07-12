import {Component, OnInit, OnChanges} from '@angular/core'

@Component({
    selector:'star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges{
    private _rating: number = 0;
    cropWidth: number = 75;
    

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._rating = 3
    }

    ngOnChanges():void{
        this.cropWidth = this._rating * 75/5
    }
    get rating(): number{
        return this._rating;
    }
    set rating(value: number){
        this._rating = value;
    }
}