import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRequestComponent } from './match-request.component';

describe('MatchRequestComponent', () => {
  let component: MatchRequestComponent;
  let fixture: ComponentFixture<MatchRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
