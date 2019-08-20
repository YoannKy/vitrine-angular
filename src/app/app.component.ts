import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { filter } from 'rxjs/operators';

import { HelpDialogComponent } from '@shared/components/help-dialog/help-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  maxHeight = 0;
  showBreadcrumb = false;
  helperCanBeActivated = true;

  constructor(public dialog: MatDialog, private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.maxHeight < (window.innerHeight + window.scrollY)) {
      this.maxHeight = (window.innerHeight + window.scrollY);
    }
    if (
      (window.innerHeight + window.scrollY) > document.body.clientHeight
      && this.maxHeight <= (window.innerHeight + window.scrollY)
      && this.helperCanBeActivated) {
      this.openDialog();
    }
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
    ).subscribe((event: NavigationStart) => {
      if (event.url === '/') {
        this.showBreadcrumb = false;
        this.helperCanBeActivated = true;
      } else {
        this.showBreadcrumb = true;
        this.helperCanBeActivated = false;
      }
      this.maxHeight = 0;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(HelpDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.helperCanBeActivated = false;
    });
  }
}
