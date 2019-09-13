import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRoleDeleteModalComponent } from './staff-role-delete-modal.component';

describe('StaffRoleDeleteModalComponent', () => {
  let component: StaffRoleDeleteModalComponent;
  let fixture: ComponentFixture<StaffRoleDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRoleDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRoleDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
