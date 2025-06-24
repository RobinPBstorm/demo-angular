import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice1 } from './exercice1';

describe('Exercice1', () => {
  let component: Exercice1;
  let fixture: ComponentFixture<Exercice1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercice1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
