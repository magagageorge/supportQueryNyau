import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDeleteModalComponent } from './staff-delete-modal.component';

describe('StaffDeleteModalComponent', () => {
  let component: StaffDeleteModalComponent;
  let fixture: ComponentFixture<StaffDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
