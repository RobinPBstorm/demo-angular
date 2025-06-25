import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSelector } from './article-selector';

describe('ArticleSelector', () => {
  let component: ArticleSelector;
  let fixture: ComponentFixture<ArticleSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
