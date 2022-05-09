import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { CharacterPage } from './character.page';

describe('CharacterPage', () => {
  let component: CharacterPage;
  let fixture: ComponentFixture<CharacterPage>;

  beforeEach(waitForAsync(() => {
    const fakeActivatedRoute = {
      snapshot: {
        data: {
          http: [
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
          ],
        },
      },
    };

    TestBed.configureTestingModule({
      declarations: [CharacterPage],
      providers: [
        RouterTestingModule,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
