import { Component, Input, ViewChild } from '@angular/core';
import { FieldTemplate } from '@antee/register-printer';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { AddFieldDlgComponent } from '../../ui-dialogs/add-field-dlg/add-field-dlg.component';
import {
  SelectFieldDlgComponent
} from '../../ui-dialogs/select-field-dlg/select-field-dlg.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-fields-view',
  templateUrl: './fields-view.component.html',
  styleUrls: ['./fields-view.component.scss']
})
export class FieldsViewComponent {

  @Input() fields: FieldTemplate[];

  @ViewChild(MatTable)
  table: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  onAddField(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = '800px';
    const dlg = this.dialog.open(
      AddFieldDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        this.fields.push(result);
        this.table.renderRows();
      }
    });
  }

  onDeleteField(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = {
      fields: this.fields
    };
    const dlg = this.dialog.open(
      SelectFieldDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.fields,
          (item) => {
            return item.name === result.name;
          });
        this.table.renderRows();
      }
    });
  }
}
