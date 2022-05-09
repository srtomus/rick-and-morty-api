import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FilterData } from '@interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() label: any;

  @Output() selectedLabel = new EventEmitter<string>();

  public speciesData: Array<FilterData> = [
    { name: 'human', active: false },
    { name: 'alien', active: false },
    { name: 'humanoid', active: false },
    { name: 'animal', active: false },
    { name: 'disease', active: false },
    { name: 'robot', active: false },
  ];
  public statusData: Array<FilterData> = [
    { name: 'alive', active: false },
    { name: 'dead', active: false },
    { name: 'unknown', active: false },
  ];
  public genderData: Array<FilterData> = [
    { name: 'male', active: false },
    { name: 'female', active: false },
    { name: 'genderless', active: false },
    { name: 'unknown', active: false },
  ];

  constructor() {}

  sendSelected(selectedChip: FilterData) {
    if (selectedChip.active) {
      this.selectedLabel.emit(null);
      selectedChip.active = !selectedChip.active;
    } else {
      this.selectedLabel.emit(selectedChip.name);

      this.resetSwitch();

      selectedChip.active = !selectedChip.active;
    }
  }

  resetSwitch() {
    switch (this.label) {
      case 'species':
        this.resetChips(this.speciesData);

        break;

      case 'status':
        this.resetChips(this.statusData);

        break;

      case 'gender':
        this.resetChips(this.genderData);
        break;

      default:
        break;
    }
  }

  resetChips(array: Array<FilterData>) {
    array.forEach((element) => {
      element['active'] = false;
    });
  }
}
