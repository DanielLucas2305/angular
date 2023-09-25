import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindigComponent } from './two-way-bindig.component';

describe('TwoWayBindigComponent', () => {
  let component: TwoWayBindigComponent;
  let fixture: ComponentFixture<TwoWayBindigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindigComponent]
    });
    fixture = TestBed.createComponent(TwoWayBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
