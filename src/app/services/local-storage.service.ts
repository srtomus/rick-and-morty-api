import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Character } from '@interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private localStorage: Storage) {}

  createStorage() {
    return this.localStorage.create();
  }

  setFavorites(favorites: Character[]) {
    return this.localStorage.set('favorites', favorites);
  }

  getFavorites() {
    return this.localStorage.get('favorites');
  }
}
