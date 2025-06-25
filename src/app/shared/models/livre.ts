export class Livre{
  titre?: string;
  nombrePage?: number;
  auteur?: string;
  genre?: string;

  constructor(titre: string, nombrePage: number,genre: string, auteur:string = 'John Doe') {
    this.titre = titre;
    this.nombrePage = nombrePage;
    this.auteur = auteur;
    this.genre = genre;
  }
}