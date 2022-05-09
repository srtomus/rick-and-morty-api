export interface CharacterInfo {
  info: Info;
  results: Array<Character>;
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface Character {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: Location;
  favorite?: boolean;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
