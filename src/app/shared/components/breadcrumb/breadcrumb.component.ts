import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { BreadCrumb } from '@shared/models/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadCrumb[] = [{ name: 'home', link: '/' }];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ResolveEnd),
    ).subscribe((event: ResolveEnd) => {
      this.breadcrumbs = event.state.root.children.reduce((breadCrumbAcc: BreadCrumb[], child) => {
        if (!child.firstChild) {
          return breadCrumbAcc;
        }

        return [...breadCrumbAcc, (child.firstChild.data.breadcrumb as BreadCrumb)];
    }, [...this.getDefaultBreadCrumb()]);
    });
  }

  private getDefaultBreadCrumb() {
    return [{ name: 'home', link: '/' }];
  }

}
