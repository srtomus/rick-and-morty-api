import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';

import { ComponentsModule } from '@components/components.module';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [CharacterPage],
})
export class CharacterPageModule {}
