export class Project{
  imageLink: string;
  title: string;
  description: string;
  technologyList: string[];
  gitLink: string;
  externalLink: string;
  categoryId: string;

  constructor(imageLink: string, title: string, description: string, technologyList: string[], gitLink: string, externalLink: string, categoryId: string) {
    this.imageLink= imageLink;
    this.title = title;
    this.description = description;
    this.technologyList = technologyList;
    this.gitLink = gitLink;
    this.externalLink = externalLink;
    this.categoryId = categoryId;
  }
}
