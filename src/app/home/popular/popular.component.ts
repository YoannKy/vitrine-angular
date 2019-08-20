import { Component, OnInit } from '@angular/core';

import { Product } from '@shared/models/product.ts';
import { GridItemType } from '@shared/const/paginator.const';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent implements OnInit {
  products: Product[];
  gridItemType: GridItemType = GridItemType.PRODUCT;

  constructor() {
    this.products = [
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: true,
        id: '1'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 155.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nicer chair',
        isHot: false,
        id: '2'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '3'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 47.72,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair 2',
        isHot: true,
        id: '4'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '5'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 155.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nicer chair',
        isHot: false,
        id: '6'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '7'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '8'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 155.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nicer chair',
        isHot: false,
        id: '9'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '10'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 47.72,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair 2',
        isHot: true,
        id: '11'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '12'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 155.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nicer chair',
        isHot: false,
        id: '13'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 45.52,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '14'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 47.72,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair 2',
        isHot: false,
        id: '15'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 47.72,
        unit: '€',
        author: 'Random dude',
        name: 'Nice chair 2',
        isHot: false,
        id: '16'
      },
    ];
  }

  ngOnInit() {
  }

  tracker(index: number) {
    return index;
  }

}
