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
import { TopSysTreeViewComponent } from './top-sys-tree-view/top-sys-tree-view.component';
import { TopSysContentViewComponent } from './top-sys-content-view/top-sys-content-view.component';
import { TopSysConsoleViewComponent } from './top-sys-console-view/top-sys-console-view.component';
import { TopSysViewComponent } from './top-sys-view/top-sys-view.component';
import { TopSysNodeComponent } from './top-sys-node/top-sys-node.component';
import { PropertyNodeComponent } from './property-node/property-node.component';
import { RegisterPrinterNodeComponent } from './register-printer-node/register-printer-node.component';
import { BlockTypesNodeComponent } from './block-types-node/block-types-node.component';
import { BlockTemplateNodeComponent } from './block-template-node/block-template-node.component';
import { RegistersNodeComponent } from './registers-node/registers-node.component';
import { RegisterNodeComponent } from './register-node/register-node.component';
import { FieldsNodeComponent } from './fields-node/fields-node.component';
import { FieldNodeComponent } from './field-node/field-node.component';
import { BlockViewComponent } from './block-view/block-view.component';
import { BlockTypeViewComponent } from './block-type-view/block-type-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { AddressMapsNodeComponent } from './address-maps-node/address-maps-node.component';
import { AddressMapNodeComponent } from './address-map-node/address-map-node.component';
import { AddressMapViewComponent } from './address-map-view/address-map-view.component';
import { TopSysAuthorComponent } from './top-sys-author/top-sys-author.component';
import { ExcelSelectorComponent } from './excel-selector/excel-selector.component';
import { TopSysVersionComponent } from './top-sys-version/top-sys-version.component';

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
    BlockTypesNodeComponent,
    BlockTemplateNodeComponent,
    RegistersNodeComponent,
    RegisterNodeComponent,
    FieldsNodeComponent,
    FieldNodeComponent,
    BlockViewComponent,
    BlockTypeViewComponent,
    RegisterViewComponent,
    FieldViewComponent,
    OpenDialogComponent,
    AddressMapsNodeComponent,
    AddressMapNodeComponent,
    AddressMapViewComponent,
    TopSysAuthorComponent,
    ExcelSelectorComponent,
    TopSysVersionComponent
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
    MatTabsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [OpenDialogComponent]
})
export class AppModule { }
