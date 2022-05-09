import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let ionicStorageSpy: jasmine.SpyObj<Storage>;

  const mockCharacters: any = [
    {
      id: 807,
      name: 'Beth Sanchez',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: "Rick's Memories",
        url: 'https://rickandmortyapi.com/api/location/126',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/807.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/51'],
      url: 'https://rickandmortyapi.com/api/character/807',
      created: '2021-11-02T13:39:31.038Z',
      favorite: true,
    },
  ];

  beforeEach(() => {
    const storageSpy = jasmine.createSpyObj('Storage', [
      'get',
      'set',
      'create',
    ]);

    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['indexedDB', 'localstorage'],
        }),
      ],
      providers: [
        {
          provide: Storage,
          useValue: storageSpy,
        },
      ],
    });

    service = TestBed.inject(LocalStorageService);
    ionicStorageSpy = TestBed.inject(Storage) as jasmine.SpyObj<Storage>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set favorite to storage', async () => {
    ionicStorageSpy.set.and.returnValue(Promise.resolve(mockCharacters));

    const response = await service.setFavorites(mockCharacters);

    expect(response)
      .withContext('response was same as stubValue')
      .toBe(mockCharacters);
  });

  it('get favorite from storage', async () => {
    ionicStorageSpy.get.and.returnValue(Promise.resolve(mockCharacters));

    const response = await service.getFavorites();

    expect(response)
      .withContext('response was same as stubValue')
      .toBe(mockCharacters);
  });
});
