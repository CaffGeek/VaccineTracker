import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort'  
import { MatTableModule } from '@angular/material/table'  
import { MatTableExporterModule } from 'mat-table-exporter';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatTableExporterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
