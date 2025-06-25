import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'article-selector',
  standalone: false,
  templateUrl: './article-selector.html',
  styleUrl: './article-selector.scss',
  outputs: ['onArticleSelect']
})
export class ArticleSelector {
  article: string;
  onArticleSelect: EventEmitter<string>;

  constructor(){
    this.article = "";
    this.onArticleSelect = new EventEmitter<string>();
  }

  sendArticle() {
    if (this.article && this.article.trim().length > 0){
      this.onArticleSelect.emit(this.article);
      this.article = "";
    }
  }
}
