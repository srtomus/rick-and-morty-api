import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';

import { StorageResolverService } from './storage-resolver.service';

describe('StorageResolverService', () => {
  let service: StorageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['indexedDB', 'localstorage'],
        }),
      ],
    });

    service = TestBed.inject(StorageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
