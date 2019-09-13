import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeleteModalComponent } from './customer-delete-modal.component';

describe('CustomerDeleteModalComponent', () => {
  let component: CustomerDeleteModalComponent;
  let fixture: ComponentFixture<CustomerDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
