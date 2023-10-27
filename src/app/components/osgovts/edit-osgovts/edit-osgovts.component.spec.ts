import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOsgovtsComponent } from './edit-osgovts.component';

describe('EditOsgovtsComponent', () => {
  let component: EditOsgovtsComponent;
  let fixture: ComponentFixture<EditOsgovtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOsgovtsComponent]
    });
    fixture = TestBed.createComponent(EditOsgovtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
