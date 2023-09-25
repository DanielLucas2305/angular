import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicoesComponent } from './condicoes.component';

describe('CondicoesComponent', () => {
  let component: CondicoesComponent;
  let fixture: ComponentFixture<CondicoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicoesComponent]
    });
    fixture = TestBed.createComponent(CondicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
