import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComplaintComponent } from './file-complaint.component';

describe('FileComplaintComponent', () => {
  let component: FileComplaintComponent;
  let fixture: ComponentFixture<FileComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
