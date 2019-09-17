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

@NgModule({
  declarations: [
    AppComponent,
    TopSysTreeViewComponent,
    TopSysContentViewComponent,
    TopSysConsoleViewComponent
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
