import { TestBed, waitForAsync } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['indexedDB', 'localstorage'],
        }),
      ],
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!
});
