import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges{
   
    cropWidth: number = 75;
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('init')
    }

    ngOnChanges():void{
        console.log(`calc ${this.rating}`)
        this.cropWidth = this.rating * 75/5
    }

    onClick(): void{
        this.ratingClicked.emit(this.rating);
    }
}