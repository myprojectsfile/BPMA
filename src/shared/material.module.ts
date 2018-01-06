import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule, MatFormFieldModule , MatToolbarModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
