import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DescriptionEditDlgComponent } from '../../ui-dialogs/description-edit-dlg/description-edit-dlg.component';

@Component({
  selector: 'app-description-edit-box',
  templateUrl: './description-edit-box.component.html',
  styleUrls: ['./description-edit-box.component.scss']
})
export class DescriptionEditBoxComponent implements OnInit {

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
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
