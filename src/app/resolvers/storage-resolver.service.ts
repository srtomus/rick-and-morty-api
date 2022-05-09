import { Injectable } from '@angular/core';

import { LocalStorageService } from '@services/local-storage.service';

import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root',
})
export class StorageResolverService {
  constructor(private localStorage: LocalStorageService) {}

  resolve(): Observable<any> {
    return from(this.getFromStorage('favorites'));
  }

  async getFromStorage(key: string) {
    let storageMethod;

    if (key == 'favorites') {
      storageMethod = await this.localStorage.getFavorites();
    }

    return storageMethod;
  }
}
