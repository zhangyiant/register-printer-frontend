import { BrowserModule } from '@angular/platform-browser';
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
    RegisterNodeComponent
  ],
  imports: [
    BrowserModule,
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
