import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryDeleteModalComponent } from './ticket-category-delete-modal.component';

describe('TicketCategoryDeleteModalComponent', () => {
  let component: TicketCategoryDeleteModalComponent;
  let fixture: ComponentFixture<TicketCategoryDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
