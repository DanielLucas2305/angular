import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumbComponent } from './change-numb.component';

describe('ChangeNumbComponent', () => {
  let component: ChangeNumbComponent;
  let fixture: ComponentFixture<ChangeNumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeNumbComponent]
    });
    fixture = TestBed.createComponent(ChangeNumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
