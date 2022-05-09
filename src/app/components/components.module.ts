import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { FilterComponent } from './accordion/filter/filter.component';
import { CardComponent } from './card/card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    HeaderComponent,
    AccordionComponent,
    FilterComponent,
    CardComponent,
  ],
  imports: [IonicModule, CommonModule, LazyLoadImageModule],
  exports: [
    HeaderComponent,
    AccordionComponent,
    FilterComponent,
    CardComponent,
  ],
})
export class ComponentsModule {}
