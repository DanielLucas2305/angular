import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoOutComponent } from './evento-out.component';

describe('EventoOutComponent', () => {
  let component: EventoOutComponent;
  let fixture: ComponentFixture<EventoOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoOutComponent]
    });
    fixture = TestBed.createComponent(EventoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
