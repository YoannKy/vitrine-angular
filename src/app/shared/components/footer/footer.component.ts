import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HelpDialogComponent } from '@shared/components/help-dialog/help-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HelpDialogComponent);
  }
}
