import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeleteModalComponent } from './department-delete-modal.component';

describe('DepartmentDeleteModalComponent', () => {
  let component: DepartmentDeleteModalComponent;
  let fixture: ComponentFixture<DepartmentDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
