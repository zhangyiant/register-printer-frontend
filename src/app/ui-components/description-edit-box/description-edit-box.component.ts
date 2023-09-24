import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { DescriptionEditDlgComponent } from '../../ui-dialogs/description-edit-dlg/description-edit-dlg.component';

@Component({
  selector: 'app-description-edit-box',
  templateUrl: './description-edit-box.component.html',
  styleUrls: ['./description-edit-box.component.scss']
})
export class DescriptionEditBoxComponent {

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog
  ) {

  }

  onDoubleClick() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = '800px';
    matDialogConfig.data = {
      description: this.value
    };
    const dlg = this.dialog.open(
      DescriptionEditDlgComponent,
      matDialogConfig
    );
    dlg.afterClosed().subscribe(result => {
      if (result) {
        this.valueChange.emit(result);
      }
    });
  }
}
