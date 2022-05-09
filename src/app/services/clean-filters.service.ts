import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class CleanFiltersService {
  public cleanFilters$: Subject<void> = new Subject<void>();

  constructor() {}

  sendCleaner() {
    this.cleanFilters$.next();
  }

  getCleaner(): Observable<any> {
    return this.cleanFilters$.asObservable();
  }
}
