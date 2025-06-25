export class Link {
  public title: string;
  public url?: string;
  public children?: Link[];
  public isVisible: boolean;

  constructor(
    title: string, 
    url: string|undefined = undefined ,
    children: Link[]|undefined = undefined,
    isVisible: boolean = true) {

    this.title = title;
    this.url = url;
    this.children = children;
    this.isVisible = isVisible;
  }
}