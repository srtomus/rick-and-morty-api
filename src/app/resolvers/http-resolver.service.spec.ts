import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResolverService } from './http-resolver.service';

describe('HttpResolverService', () => {
  let service: HttpResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
