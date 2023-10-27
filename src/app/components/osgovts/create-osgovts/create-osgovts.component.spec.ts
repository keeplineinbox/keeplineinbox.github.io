import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOsgovtsComponent } from './create-osgovts.component';

describe('CreateOsgovtsComponent', () => {
  let component: CreateOsgovtsComponent;
  let fixture: ComponentFixture<CreateOsgovtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOsgovtsComponent]
    });
    fixture = TestBed.createComponent(CreateOsgovtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
