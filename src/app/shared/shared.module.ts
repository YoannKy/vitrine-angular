import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgxPaginationModule } from 'ngx-pagination';

import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomePaginatorComponent } from './components/home-paginator/home-paginator.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ItemsDirective } from './directives/items.directive';
import { CollectionGridComponent } from './components/collection-grid/collection-grid.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BottomPaginatorComponent } from './components/bottom-paginator/bottom-paginator.component';
import { SortComponent } from './components/sort/sort.component';
import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';
import { SortService } from './components/sort/sort.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    NewsletterComponent,
    CarouselComponent,
    HomePaginatorComponent,
    ProductGridComponent,
    CollectionGridComponent,
    BreadcrumbComponent,
    BottomPaginatorComponent,
    SortComponent
  ],
  providers: [
    SortService
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    CarouselComponent,
    HomePaginatorComponent,
    ProductGridComponent,
    ItemsDirective,
    CollectionGridComponent,
    BreadcrumbComponent,
    BottomPaginatorComponent,
    SortComponent,
    HelpDialogComponent,
  ],
  entryComponents: [
    ProductGridComponent,
    CollectionGridComponent,
    HelpDialogComponent
  ]
})
export class SharedModule {}
