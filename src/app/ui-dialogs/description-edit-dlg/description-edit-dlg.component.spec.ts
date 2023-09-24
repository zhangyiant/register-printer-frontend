import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DescriptionEditDlgComponent} from './description-edit-dlg.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class MockMatDialogRef {
}

class MockMatDialogData {
}

describe('DescriptionEditDlgComponent', () => {
  let component: DescriptionEditDlgComponent;
  let fixture: ComponentFixture<DescriptionEditDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionEditDlgComponent ],
      imports: [
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef, useClass: MockMatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA, useClass: MockMatDialogData
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionEditDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
