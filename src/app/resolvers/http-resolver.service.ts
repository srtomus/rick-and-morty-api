import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { CharacterInfo } from '@interfaces';

import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class HttpResolverService {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CharacterInfo> {
    const id = route.params.id;

    let req = id
      ? this.apiService.getCharacter(id)
      : this.apiService.getList({ page: 1 });

    return req.pipe(
      catchError((error) => {
        return of({ error: error });
      })
    );
  }
}
