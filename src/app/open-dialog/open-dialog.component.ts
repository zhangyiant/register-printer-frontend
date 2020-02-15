import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class OpenDialogComponent implements OnInit {

  filenames: string[] = ['a', 'b', 'c', 'd'];

  constructor(
    public dialogRef: MatDialogRef<OpenDialogComponent>) {
  }

  ngOnInit() {
  }

}
