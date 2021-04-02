import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, retry, take, tap } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchUrl = 'https://api.github.com/search/users';
  private searchLimit = '5';
  private searchSince = '305';

  constructor(private http: HttpClient) {}

  // get user(s) by name
  getUsers(name: string): Observable<Object> {
    var options = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.v3+json',
      }),
      params: new HttpParams().appendAll({
        q: name.trim(),
        per_page: this.searchLimit,
        since: this.searchSince,
      }),
      reportProgress: true,
    };

    return this.http.get<Object>(this.searchUrl, options);
    // debug  .pipe(tap((u) => console.log(JSON.stringify(u))));
  }
}
