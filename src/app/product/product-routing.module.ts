import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './list/product-list.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data : {
      breadcrumb: {
        link: '/products',
        name: 'products'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
