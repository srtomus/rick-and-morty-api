import { EpisodeNamePipe } from './episode-name.pipe';

describe('EpisodeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new EpisodeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
