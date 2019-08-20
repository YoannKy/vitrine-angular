import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PopularComponent } from './popular/popular.component';
import { CollectionComponent } from './collection/collection.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [HomeComponent, PopularComponent, CollectionComponent, CategoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
