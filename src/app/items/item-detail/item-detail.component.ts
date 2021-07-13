import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Iitem } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  detailTitle: string = "Item detail";
  item: Iitem | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id)
    this.detailTitle += `: ${id}`;
  }

  onBack():void{
    this.router.navigate(['/items']);
  }

}
