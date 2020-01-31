import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { TopSysTreeViewComponent } from './top-sys-tree-view/top-sys-tree-view.component';
import { TopSysContentViewComponent } from './top-sys-content-view/top-sys-content-view.component';
import { TopSysConsoleViewComponent } from './top-sys-console-view/top-sys-console-view.component';
import { TopSysViewComponent } from './top-sys-view/top-sys-view.component';
import { TopSysNodeComponent } from './top-sys-node/top-sys-node.component';
import { PropertyNodeComponent } from './property-node/property-node.component';
import { RegisterPrinterNodeComponent } from './register-printer-node/register-printer-node.component';
import { BlockTypesNodeComponent } from './block-types-node/block-types-node.component';
import { BlockTypeNodeComponent } from './block-type-node/block-type-node.component';
import { RegistersNodeComponent } from './registers-node/registers-node.component';
import { RegisterNodeComponent } from './register-node/register-node.component';
import { FieldsNodeComponent } from './fields-node/fields-node.component';
import { FieldNodeComponent } from './field-node/field-node.component';
import { BlockViewComponent } from './block-view/block-view.component';
import { BlockTypeViewComponent } from './block-type-view/block-type-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { FieldViewComponent } from './field-view/field-view.component';

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
    BlockTypeNodeComponent,
    RegistersNodeComponent,
    RegisterNodeComponent,
    FieldsNodeComponent,
    FieldNodeComponent,
    BlockViewComponent,
    BlockTypeViewComponent,
    RegisterViewComponent,
    FieldViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
