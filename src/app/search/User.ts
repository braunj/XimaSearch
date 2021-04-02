export class User {
  login: string;
  id: number;
  url: string;
  html_url: string;

  constructor(login: string, id: number, url: string, html_url: string) {
    this.login = login;
    this.id = id;
    this.url = url;
    this.html_url = html_url;
  }
}
