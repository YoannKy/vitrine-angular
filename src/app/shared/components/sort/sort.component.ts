import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Sort } from '@shared/models/sort';
import { Sort as SortConst } from '@shared/const/sort.const';

import { SortService } from './sort.service';

interface SortMapping {
  [base: string]: {
    sort: number;
    selected: boolean;
  };
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input() sorts: Sort[] = [];
  @Input() items: any[] = [];
  @Output() handleSort = new EventEmitter();

  sortMapping: SortMapping;

  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.sortMapping = this.getDefaultSort();
  }

  onSort(sortName: string) {
    const sortedItems = this.sortService.sortBy({ items: this.items, property: sortName, order: this.sortMapping[sortName].sort });
    this.handleSort.emit(sortedItems);
    this.sortMapping[sortName].sort = +!this.sortMapping[sortName].sort;
    this.sortMapping[sortName].selected = true;
    this.sorts.filter((sort: Sort) => sortName !== sort.name).forEach((otherSort: Sort) => {
      this.sortMapping[otherSort.name].sort = SortConst.ASC;
      this.sortMapping[otherSort.name].selected = false;
    });
  }

  getDefaultSort(): SortMapping {
    return this.sorts.reduce((sortAcc: SortMapping, sort: Sort) => {
      return {
        ...sortAcc,
        [sort.name]: {
          sort: SortConst.ASC,
          selected: false
        }
      };
    }, {});
  }
}
