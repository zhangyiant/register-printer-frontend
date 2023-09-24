import { Component, ViewChild, Input } from '@angular/core';
import { MatLegacyMenu as MatMenu } from '@angular/material/legacy-menu';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { AddBlockTemplateDlgComponent } from '../../ui-dialogs/add-block-template-dlg/add-block-template-dlg.component';
import { SelectBlockTemplateDlgComponent } from '../../ui-dialogs/select-block-template-dlg/select-block-template-dlg.component';
import { BlockTemplatesTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';
import { RegisterPrinterService } from '../../register-printer.service';

@Component({
  selector: 'app-block-templates-node',
  templateUrl: './block-templates-node.component.html',
  styleUrls: ['./block-templates-node.component.scss']
})
export class BlockTemplatesNodeComponent {

  @Input() blockTemplatesTreeNode: BlockTemplatesTreeNode;

  constructor(
    private dialog: MatDialog,
    private registerPrinterService: RegisterPrinterService
  ) { }

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
