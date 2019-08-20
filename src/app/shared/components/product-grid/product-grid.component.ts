import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { PaginationInstance } from 'ngx-pagination';

import { Product } from '@shared/models/product';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  animations: [
   // the fade-in/fade-out animation.
   trigger('faceInOut', [

     state('in', style({opacity: 1})),

     transition(':enter', [
       style({opacity: 0}),
       animate(800)
     ]),

     transition(':leave',
       animate(0, style({opacity: 0})))
   ])
 ]
})
export class ProductGridComponent implements OnInit {
  @Input() items: Product[];
  @Input() config: PaginationInstance;

  in: any;
  out: any;

  constructor() { }

  ngOnInit() {
  }

}
