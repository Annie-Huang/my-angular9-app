import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaUiComponent } from './ea-ui.component';

describe('EaUiComponent', () => {
  let component: EaUiComponent;
  let fixture: ComponentFixture<EaUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
