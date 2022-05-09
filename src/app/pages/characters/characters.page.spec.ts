import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IonicModule } from '@ionic/angular';

import { CharactersPage } from './characters.page';

describe('CharactersPage', () => {
  let component: CharactersPage;
  let fixture: ComponentFixture<CharactersPage>;

  beforeEach(waitForAsync(() => {
    const fakeCharacter = [
      {
        created: '2017-11-04T18:48:46.250Z',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
        ],
        favorite: true,
        gender: 'Male',
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        name: 'Rick Sanchez',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        species: 'Human',
        status: 'Alive',
        type: '',
        url: 'https://rickandmortyapi.com/api/character/1',
      },
    ];

    const fakeInfo = {
      info: {
        count: 826,
        next: 'https://rickandmortyapi.com/api/character?page=2',
        pages: 42,
        prev: null,
      },
      results: fakeCharacter,
    };

    const fakeActivatedRoute = {
      snapshot: {
        data: {
          http: fakeInfo,
          storage: fakeCharacter,
        },
      },
    };

    TestBed.configureTestingModule({
      declarations: [CharactersPage],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
