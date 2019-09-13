import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDeleteModalComponent } from './ticket-delete-modal.component';

describe('TicketDeleteModalComponent', () => {
  let component: TicketDeleteModalComponent;
  let fixture: ComponentFixture<TicketDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
