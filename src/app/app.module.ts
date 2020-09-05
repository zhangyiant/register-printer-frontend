import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { TopSysTreeViewComponent } from './ui-tree-view/top-sys-tree-view/top-sys-tree-view.component';
import { TopSysContentViewComponent } from './ui-content-view/top-sys-content-view/top-sys-content-view.component';
import { TopSysConsoleViewComponent } from './top-sys-console-view/top-sys-console-view.component';
import { TopSysViewComponent } from './ui-content-view/top-sys-view/top-sys-view.component';
import { TopSysNodeComponent } from './ui-tree-view/top-sys-node/top-sys-node.component';
import { PropertyNodeComponent } from './property-node/property-node.component';
import { RegisterPrinterNodeComponent } from './ui-tree-view/register-printer-node/register-printer-node.component';
import { BlockTemplatesNodeComponent } from './ui-tree-view/block-templates-node/block-templates-node.component';
import { BlockTemplateNodeComponent } from './block-template-node/block-template-node.component';
import { RegistersNodeComponent } from './registers-node/registers-node.component';
import { RegisterNodeComponent } from './register-node/register-node.component';
import { FieldsNodeComponent } from './fields-node/fields-node.component';
import { FieldNodeComponent } from './field-node/field-node.component';
import { BlockViewComponent } from './block-view/block-view.component';
import { BlockTemplateViewComponent } from './ui-content-view/block-template-view/block-template-view.component';
import { RegisterViewComponent } from './ui-content-view/register-view/register-view.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { BlockInstancesNodeComponent } from './ui-tree-view/block-instances-node/block-instances-node.component';
import { BlockInstanceNodeComponent } from './block-instance-node/block-instance-node.component';
import { BlockInstanceViewComponent } from './block-instance-view/block-instance-view.component';
import { TopSysAuthorComponent } from './ui-components/top-sys-author/top-sys-author/top-sys-author.component';
import { ExcelSelectorComponent } from './excel-selector/excel-selector.component';
import { TopSysVersionComponent } from './ui-components/top-sys-version/top-sys-version/top-sys-version.component';
import { EditBoxComponent } from './ui-components/edit-box/edit-box.component';
import { MainWindowViewComponent } from './main-window-view/main-window-view.component';
import { BlockInstancesViewComponent } from './ui-content-view/block-instances-view/block-instances-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopSysTreeViewComponent,
    TopSysContentViewComponent,
    TopSysConsoleViewComponent,
    TopSysViewComponent,
    TopSysNodeComponent,
    PropertyNodeComponent,
    RegisterPrinterNodeComponent,
    BlockTemplatesNodeComponent,
    BlockTemplateNodeComponent,
    RegistersNodeComponent,
    RegisterNodeComponent,
    FieldsNodeComponent,
    FieldNodeComponent,
    BlockViewComponent,
    BlockTemplateViewComponent,
    RegisterViewComponent,
    FieldViewComponent,
    OpenDialogComponent,
    BlockInstancesNodeComponent,
    BlockInstanceNodeComponent,
    BlockInstanceViewComponent,
    TopSysAuthorComponent,
    ExcelSelectorComponent,
    TopSysVersionComponent,
    EditBoxComponent,
    MainWindowViewComponent,
    BlockInstancesViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatTreeModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [OpenDialogComponent]
})
export class AppModule { }
