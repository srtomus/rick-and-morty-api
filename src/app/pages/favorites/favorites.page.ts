import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '@interfaces';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  public favoritesList: Array<Character>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.favoritesList = this.activatedRoute.snapshot.data.storage;
    console.log(this.favoritesList);

    if (this.favoritesList == null) {
      this.favoritesList = [];
    }
  }
}
