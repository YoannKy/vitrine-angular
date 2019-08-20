import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { PaginationInstance } from 'ngx-pagination';

import { Product } from '@shared/models/product';
import { Collection } from '@shared/models/collection';
import { ItemsDirective } from '@shared/directives/items.directive';
import { ItemComponent } from '@shared/models/item-component';

import { PAGINATOR_COMPONENT_MAPPING } from '@shared/const/paginator.const';

@Component({
  selector: 'app-home-paginator',
  templateUrl: './home-paginator.component.html',
  styleUrls: ['./home-paginator.component.scss'],
})
export class HomePaginatorComponent implements OnInit {
  @Input() items: Product[] | Collection[] = [];
  @Input() gridItemType: number;
  @Input() id: string;
  @Input() title: string;
  @Input() subtitle: string;

  @ViewChild(ItemsDirective, {static: true}) itemsDirective: ItemsDirective;

  public config: PaginationInstance;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.config = {
        id: this.id,
        itemsPerPage: 8,
        currentPage: 1
    };

    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PAGINATOR_COMPONENT_MAPPING[this.gridItemType]);

    const viewContainerRef = this.itemsDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ItemComponent).items = this.items;
    (componentRef.instance as ItemComponent).config = this.config;
  }

}
