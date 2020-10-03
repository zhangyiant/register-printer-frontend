import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexEditBoxComponent } from './hex-edit-box.component';

describe('HexEditorComponent', () => {
  let component: HexEditBoxComponent;
  let fixture: ComponentFixture<HexEditBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
