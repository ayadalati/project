import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqRequestComponent } from './eq-request.component';

describe('EqRequestComponent', () => {
  let component: EqRequestComponent;
  let fixture: ComponentFixture<EqRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
