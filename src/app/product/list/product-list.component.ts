import { Component, OnInit } from '@angular/core';

import { Product } from '@shared/models/product';
import { Sort } from '@shared/models/sort';
import { GridItemType } from '@shared/const/paginator.const';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  sorts: Sort[] = [
    {
      name: 'price'
    },
    {
      name: 'author'
    },
    {
      name: 'name'
    }
  ];
  gridItemType: GridItemType = GridItemType.PRODUCT;
  tags: string[] = ['Kitchen', 'Decor'];

  constructor() {
    this.products = [
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 752.52,
        unit: '€',
        author: 'A Random dude',
        name: 'A Nice chair',
        isHot: true,
        id: '1'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 155.52,
        unit: '€',
        author: 'My Random dude',
        name: 'The Nicer chair',
        isHot: false,
        id: '2'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 24.52,
        unit: '€',
        author: 'The one',
        name: 'One Nice chair',
        isHot: false,
        id: '3'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 76.72,
        unit: '€',
        author: 'Holt',
        name: 'Nice chair 2',
        isHot: true,
        id: '4'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 100.52,
        unit: '€',
        author: 'Gaspard',
        name: 'Terrible Nice chair',
        isHot: false,
        id: '5'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 1.52,
        unit: '€',
        author: 'Paul',
        name: 'Nicer chair',
        isHot: false,
        id: '6'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 5.52,
        unit: '€',
        author: 'Pat',
        name: 'My Nice chair',
        isHot: false,
        id: '7'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 1545.52,
        unit: '€',
        author: 'Romain',
        name: 'Too expensive Nice chair',
        isHot: false,
        id: '8'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 155.52,
        unit: '€',
        author: 'Peter',
        name: 'Nicer chair',
        isHot: false,
        id: '9'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'So Random dude',
        name: 'Nice chair',
        isHot: false,
        id: '10'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 47.72,
        unit: '€',
        author: 'I don\'t know what to write',
        name: 'Ze chair',
        isHot: true,
        id: '11'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 45.52,
        unit: '€',
        author: 'Author',
        name: 'Nice chair',
        isHot: false,
        id: '12'
      },
      {
        image: 'assets/images/products/chair-4.jpg',
        price: 155.52,
        unit: '€',
        author: 'Yes dude',
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
        author: 'Zen youn',
        name: 'Nice chair 2',
        isHot: false,
        id: '15'
      },
      {
        image: 'assets/images/products/chair-1.jpeg',
        price: 47.72,
        unit: '€',
        author: 'My guy',
        name: 'Nice chair 2',
        isHot: false,
        id: '16'
      },
    ];
  }

  ngOnInit() {}

  setNewSort(products: Product[]) {
    this.products = products;
  }
}
