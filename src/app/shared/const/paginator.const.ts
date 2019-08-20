import { ProductGridComponent } from '@shared/components/product-grid/product-grid.component';
import { CollectionGridComponent } from '@shared/components/collection-grid/collection-grid.component';

export enum GridItemType {
  PRODUCT,
  COLLECTION
}

export const PAGINATOR_COMPONENT_MAPPING = {
  [GridItemType.PRODUCT]: ProductGridComponent,
  [GridItemType.COLLECTION]: CollectionGridComponent,
};
