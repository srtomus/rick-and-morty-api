import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '@interfaces';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  public errorMessage: string;
  public reqStatus: string;

  public character: Character;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const resolverData = this.activatedRoute.snapshot.data.http;

    if (resolverData.error) {
      this.reqStatus = 'error';
      this.errorMessage = resolverData.error.error.error;
    } else {
      this.reqStatus = 'success';
      this.character = resolverData;
    }
  }
}
