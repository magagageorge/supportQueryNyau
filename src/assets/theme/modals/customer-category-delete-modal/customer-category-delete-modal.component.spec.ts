import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCategoryDeleteModalComponent } from './customer-category-delete-modal.component';

describe('CustomerCategoryDeleteModalComponent', () => {
  let component: CustomerCategoryDeleteModalComponent;
  let fixture: ComponentFixture<CustomerCategoryDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCategoryDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCategoryDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
