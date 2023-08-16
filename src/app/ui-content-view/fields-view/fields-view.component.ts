import { Component, Input, ViewChild } from '@angular/core';
import { FieldTemplate } from '@antee/register-printer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
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

  element: boolean;

  public item : FieldTemplate;

  constructor(private dialog: MatDialog) { 
    this.element = true;
  }

  onAddField(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = '800px';
    const len = this.fields.length;
    matDialogConfig.data = { msb : 31 };
    if(len > 0 && this.fields[len-1].lsb != 0) {
      matDialogConfig.data.msb = this.fields[len-1].lsb -1;
    }
    const dlg = this.dialog.open(
      AddFieldDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        if(result.name == "-" || result.access == "-" || result.name == ""  ) {
          result.name = "-";
          result.access = "-";
          result.defaultValue = 0;
        }
        var index = 0;
        for (this.item of this.fields) {
          if(this.item.msb >= result.msb) {
            index += 1;
          } else {
            this.fields.splice(index,0,result)
            break
          }
        }
//        this.fields.push(result);
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


  onshow(): void {
    if(this.element == true) {
      this.element = false;
    } else {
      this.element = true;
    }
  }

}
