import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { LocalStorageService } from '@services/local-storage.service';

import { Character } from '@interfaces';

import { DataSources } from '@config/data-sources';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character: Character;
  @Input() favoritesList: Character[];

  public defaultImg: string;

  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController
  ) {
    this.defaultImg = DataSources.defaultImg;
  }

  ngOnInit() {}

  toggleFavorite(character) {
    character.favorite = character.favorite ? false : true;

    if (character.favorite) {
      this.favoritesList.push(character);
    } else {
      const characterIndex = this.favoritesList.findIndex(
        (favorite: Character) => {
          return favorite.id == character.id;
        }
      );

      if (characterIndex != -1) {
        this.favoritesList.splice(characterIndex, 1);
      }
    }

    this.localStorageService.setFavorites(this.favoritesList);
  }

  seeDetails(id) {
    this.navCtrl.navigateForward(`character/${id}`, { animated: false });
  }
}
