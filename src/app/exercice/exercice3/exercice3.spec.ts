import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice3 } from './exercice3';

describe('Exercice3', () => {
  let component: Exercice3;
  let fixture: ComponentFixture<Exercice3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercice3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
