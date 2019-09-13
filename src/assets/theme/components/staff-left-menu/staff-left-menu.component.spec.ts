import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeftMenuComponent } from './staff-left-menu.component';

describe('StaffLeftMenuComponent', () => {
  let component: StaffLeftMenuComponent;
  let fixture: ComponentFixture<StaffLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
