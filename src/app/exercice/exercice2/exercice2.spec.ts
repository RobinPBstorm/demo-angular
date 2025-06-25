import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice2 } from './exercice2';

describe('Exercice2', () => {
  let component: Exercice2;
  let fixture: ComponentFixture<Exercice2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercice2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
