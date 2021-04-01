import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchUrl = 'https://https://api.github.com/search/users';

  constructor(
    private http: HttpClient //  private messageService: MessageService
  ) {}

  getUsers(): Observable<User[]> {
    return EMPTY;
  }
}
