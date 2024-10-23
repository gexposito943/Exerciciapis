import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyServiceService {
  constructor(private http: HttpClient) {}

  getPersonatges(): Observable<any> {
    return this.http.get('url/api/personatges'); 
  }
}
