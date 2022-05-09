import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SelectedFilter } from '@interfaces';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() value: string;

  @Output() valueChanged = new EventEmitter<SelectedFilter>();

  constructor() {}

  setFilter(ev) {
    this.valueChanged.emit({ filter: this.value, value: ev });
  }
}
