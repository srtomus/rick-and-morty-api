import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs/internal/observable/throwError';
import { of } from 'rxjs/internal/observable/of';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    service = new ApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct getList() response', (done: DoneFn) => {
    const mockParams = {
      page: 1,
      status: 'dead',
      gender: 'male',
      species: 'alien',
      name: 'beebo',
    };

    const mockResponse = {
      info: { count: 1, pages: 1, next: null, prev: null },
      results: [
        {
          id: 33,
          name: 'Beebo',
          status: 'Dead',
          species: 'Alien',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Venzenulon 7',
            url: 'https://rickandmortyapi.com/api/location/10',
          },
          location: {
            name: 'Venzenulon 7',
            url: 'https://rickandmortyapi.com/api/location/10',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/29'],
          url: 'https://rickandmortyapi.com/api/character/33',
          created: '2017-11-05T09:21:55.595Z',
        },
      ],
    };

    httpClientSpy.get.and.returnValue(of(mockResponse));

    service.getList(mockParams).subscribe((result) => {
      expect(result).toEqual(mockResponse);
      done();
    });
  });

  it('should return incorrect getCharacter() response', (done: DoneFn) => {
    const mockParams = {
      page: 1000,
    };

    const mockResponse = new HttpErrorResponse({
      status: 404,
      error: 'There is nothing here',
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(mockResponse));

    service.getList(mockParams).subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(mockResponse);
        done();
      }
    );
  });

  it('should return correct getCharacter() response', (done: DoneFn) => {
    const mockParams = 1;

    const mockResponse = {
      id: 33,
      name: 'Beebo',
      status: 'Dead',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Venzenulon 7',
        url: 'https://rickandmortyapi.com/api/location/10',
      },
      location: {
        name: 'Venzenulon 7',
        url: 'https://rickandmortyapi.com/api/location/10',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/29'],
      url: 'https://rickandmortyapi.com/api/character/33',
      created: '2017-11-05T09:21:55.595Z',
    };

    httpClientSpy.get.and.returnValue(of(mockResponse));

    service.getCharacter(mockParams).subscribe((result) => {
      expect(result).toEqual(mockResponse);
      done();
    });
  });

  it('should return incorrect getCharacter() response', (done: DoneFn) => {
    const mockParams = 1000;

    const mockResponse = new HttpErrorResponse({
      status: 404,
      error: 'Character not found',
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(mockResponse));

    service.getCharacter(mockParams).subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(mockResponse);
        done();
      }
    );
  });
});
