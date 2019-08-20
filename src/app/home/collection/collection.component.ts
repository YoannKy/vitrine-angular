import { Component, OnInit } from '@angular/core';

import { Collection } from '@shared/models/collection';
import { GridItemType } from '@shared/const/paginator.const';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collections: Collection[];
  gridItemType: GridItemType = GridItemType.COLLECTION;

  constructor() {
    this.collections = [
      {
        id: '1',
        author: 'mySelf',
        name: 'wait',
          image: 'assets/images/products/chair-1.jpeg',
      },
      {
        id: '1',
        author: 'mySelf',
        name: 'wait',
          image: 'assets/images/products/chair-4.jpg',
      },
      {
        id: '1',
        author: 'mySelf',
        name: 'wait',
          image: 'assets/images/products/chair-4.jpg',
      },
      {
        id: '1',
        author: 'mySelf',
        name: 'wait',
          image: 'assets/images/products/chair-1.jpeg',
      }
    ];
  }

  ngOnInit() {
  }

}
