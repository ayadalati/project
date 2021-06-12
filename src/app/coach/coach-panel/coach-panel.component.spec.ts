import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPanelComponent } from './coach-panel.component';

describe('CoachPanelComponent', () => {
  let component: CoachPanelComponent;
  let fixture: ComponentFixture<CoachPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
