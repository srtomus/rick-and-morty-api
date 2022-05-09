import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeName',
})
export class EpisodeNamePipe implements PipeTransform {
  transform(value: string): string {
    const split = value.split('/');
    const capitalizeFirst =
      split[4].charAt(0).toUpperCase() + split[4].slice(1);

    return capitalizeFirst + ' ' + split[5];
  }
}
