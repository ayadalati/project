import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchDetailsComponent } from './add-match-details.component';

describe('AddMatchDetailsComponent', () => {
  let component: AddMatchDetailsComponent;
  let fixture: ComponentFixture<AddMatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
