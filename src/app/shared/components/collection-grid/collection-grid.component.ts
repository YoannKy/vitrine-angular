import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { PaginationInstance } from 'ngx-pagination';

import { Collection } from '@shared/models/collection';

enum csClass {
  FIRST_ITEM,
  SECOND_ITEM,
  THIRD_ITEM,
  FOURTH_ITEM
}

const MAPPING_CLASS = {
  [csClass.FIRST_ITEM]: 'box',
  [csClass.SECOND_ITEM]: 'box-left',
  [csClass.THIRD_ITEM]: 'box-right',
  [csClass.FOURTH_ITEM]: 'box-left',
};

@Component({
  selector: 'app-collection-grid',
  templateUrl: './collection-grid.component.html',
  styleUrls: ['./collection-grid.component.scss'],
  animations: [
     // the fade-in/fade-out animation.
     trigger('faceInOut', [

       state('in', style({opacity: 1})),

       transition(':enter', [
         style({opacity: 0}),
         animate(500)
       ]),

       transition(':leave',
         animate(100, style({opacity: 0})))
     ])
   ]
})
export class CollectionGridComponent implements OnInit {
  @Input() items: Collection[];
  @Input() config: PaginationInstance;

  in: any;
  out: any;

  itemMappingClass: string[] = [];
  constructor() { }

  ngOnInit() {
    this.itemMappingClass = this.items.map((_, index: number) => (MAPPING_CLASS[index]));
  }
}
