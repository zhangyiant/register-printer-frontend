import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFieldDlgComponent } from './add-field-dlg.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NumberEditBoxComponent } from '../../ui-components/number-edit-box/number-edit-box.component';
import { HexEditBoxComponent } from '../../ui-components/hex-editor-box/hex-edit-box.component';
import { AccessSelectorComponent } from '../../ui-components/access-selector/access-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockMatDialogRef {
  close(): void {
  }
}

describe('AddFieldDlgComponent', () => {
  let component: AddFieldDlgComponent;
  let fixture: ComponentFixture<AddFieldDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldDlgComponent, NumberEditBoxComponent, HexEditBoxComponent, AccessSelectorComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef, useClass: MockMatDialogRef
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
