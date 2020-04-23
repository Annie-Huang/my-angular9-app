import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDatePickerReactiveFormsComponent } from './sample-date-picker-reactive-forms.component';

describe('SampleDatePickerReactiveFormsComponent', () => {
  let component: SampleDatePickerReactiveFormsComponent;
  let fixture: ComponentFixture<SampleDatePickerReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDatePickerReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDatePickerReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
