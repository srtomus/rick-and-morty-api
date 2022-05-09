import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeNamePipe } from '@pipes/episode-name/episode-name.pipe';

@NgModule({
  declarations: [EpisodeNamePipe],
  imports: [CommonModule],
  exports: [EpisodeNamePipe],
})
export class PipesModule {}
