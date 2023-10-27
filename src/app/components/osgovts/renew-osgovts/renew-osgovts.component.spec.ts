import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewOsgovtsComponent } from './renew-osgovts.component';

describe('RenewOsgovtsComponent', () => {
  let component: RenewOsgovtsComponent;
  let fixture: ComponentFixture<RenewOsgovtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenewOsgovtsComponent]
    });
    fixture = TestBed.createComponent(RenewOsgovtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
