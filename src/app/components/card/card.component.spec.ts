import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const characterMock = {
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
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        RouterTestingModule,
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['indexedDB', 'localstorage'],
        }),
        IonicModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.character = characterMock;
    component.favoritesList = [characterMock];

    fixture.detectChanges();
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
