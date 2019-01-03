import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDeleteModalComponent } from './survey-delete-modal.component';

describe('SurveyDeleteModalComponent', () => {
  let component: SurveyDeleteModalComponent;
  let fixture: ComponentFixture<SurveyDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
