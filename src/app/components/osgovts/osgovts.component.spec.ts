import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsgovtsComponent } from './osgovts.component';

describe('OsgovtsComponent', () => {
  let component: OsgovtsComponent;
  let fixture: ComponentFixture<OsgovtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsgovtsComponent]
    });
    fixture = TestBed.createComponent(OsgovtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
