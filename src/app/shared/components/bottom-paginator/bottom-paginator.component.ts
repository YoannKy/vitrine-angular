import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import { PaginationInstance } from 'ngx-pagination';

import { Product } from '@shared/models/product';
import { Collection } from '@shared/models/collection';
import { ItemsDirective } from '@shared/directives/items.directive';
import { ItemComponent } from '@shared/models/item-component';

import { PAGINATOR_COMPONENT_MAPPING } from '@shared/const/paginator.const';

@Component({
  selector: 'app-bottom-paginator',
  templateUrl: './bottom-paginator.component.html',
  styleUrls: ['./bottom-paginator.component.scss'],
})
export class BottomPaginatorComponent implements OnChanges, OnInit {
  @Input() items: Product[] | Collection[] = [];
  @Input() gridItemType: number;
  @Input() id: string;

  @ViewChild(ItemsDirective, {static: true}) itemsDirective: ItemsDirective;

  public config: PaginationInstance;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && !!changes.items.previousValue) {
      this.items = (changes.items.currentValue as  Product[] | Collection[]);
      this.loadComponent();
    }
  }

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
