import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Character } from '@interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private localStorage: Storage) {}

  createStorage() {
    this.localStorage.create();
  }

  setFavorites(favorites: Character[]) {
    this.localStorage.set('favorites', favorites);
  }

  getFavorites() {
    return this.localStorage.get('favorites');
  }
}
