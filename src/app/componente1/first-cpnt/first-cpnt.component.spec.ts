import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCpntComponent } from './first-cpnt.component';

describe('FirstCpntComponent', () => {
  let component: FirstCpntComponent;
  let fixture: ComponentFixture<FirstCpntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCpntComponent]
    });
    fixture = TestBed.createComponent(FirstCpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
