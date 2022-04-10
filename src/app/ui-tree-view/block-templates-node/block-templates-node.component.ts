import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddBlockTemplateDlgComponent } from '../../ui-dialogs/add-block-template-dlg/add-block-template-dlg.component';
import { SelectBlockTemplateDlgComponent } from '../../ui-dialogs/select-block-template-dlg/select-block-template-dlg.component';
import { BlockTemplatesTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';
import { RegisterPrinterService } from '../../register-printer.service';

@Component({
  selector: 'app-block-templates-node',
  templateUrl: './block-templates-node.component.html',
  styleUrls: ['./block-templates-node.component.scss']
})
export class BlockTemplatesNodeComponent implements OnInit {

  @Input() blockTemplatesTreeNode: BlockTemplatesTreeNode;

  constructor(
    private dialog: MatDialog,
    private registerPrinterService: RegisterPrinterService
  ) { }

  ngOnInit() {
  }

  addBlockTemplate() {
    const config = new MatDialogConfig();
    config.disableClose = true;
    const dlg = this.dialog.open(
      AddBlockTemplateDlgComponent,
      config
    );
    dlg.afterClosed().subscribe(
      result => {
        if (result) {
          this.registerPrinterService.addBlockTemplate(result);
        }
      }
    );
  }

  removeBlockTemplate() {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.data = {
      blockTemplates: this.blockTemplatesTreeNode.blockTemplates
    };
    const dlg = this.dialog.open(
      SelectBlockTemplateDlgComponent,
      config
    );
    dlg.afterClosed().subscribe(
      result => {
        if (result) {
          this.registerPrinterService.removeBlockTemplate(result);
        }
      }
    );
  }
}
