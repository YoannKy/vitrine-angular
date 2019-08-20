import { Sort } from '@shared/const/sort.const';

export class SortService {
  sortBy({ items, property, order}: { items: any[], property: string, order: number }) {
    return [...items].sort((firstItem: any, secondItem: any) => {
      if (!firstItem[property] || !secondItem[property]) {
        return 0;
      }

      if (order === Sort.ASC) {
        return firstItem[property] > secondItem[property] ? 1 : -1;
      }

      if (order === Sort.DESC) {
          return firstItem[property] > secondItem[property] ? -1 : 1;
      }

      return 0;
    });
  }
}
