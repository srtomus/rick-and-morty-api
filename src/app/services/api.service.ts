import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataSources } from '@config/data-sources';

import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getList(params): Observable<any> {
    return this.http.get(DataSources.apiUrl, {
      params,
    });
  }

  getCharacter(id: number) {
    return this.http.get(`${DataSources.apiUrl}/${id}`);
  }
}
