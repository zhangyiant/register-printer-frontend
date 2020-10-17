import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Field } from '../../../register-printer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatTable } from '@angular/material/table'
import { AddFieldDlgComponent } from '../../ui-dialogs/add-field-dlg/add-field-dlg.component';


@Component({
  selector: 'app-fields-view',
  templateUrl: './fields-view.component.html',
  styleUrls: ['./fields-view.component.scss']
})
export class FieldsViewComponent implements OnInit {

  @Input() fields: Field[];

  @ViewChild(MatTable)
  table: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddField(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = "800px";
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

  }
}
