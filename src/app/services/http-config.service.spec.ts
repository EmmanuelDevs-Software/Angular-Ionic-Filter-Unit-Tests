import { TestBed, async, inject } from '@angular/core/testing';

import { HttpConfigService } from './http-config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

export const mockAlbumIten = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "eaque aut omnis a"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "natus impedit quibusdam illo est"
  },
]
describe('HttpConfigService  getListOfAlbums()', () => {
  let servicio: HttpConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], providers: [
        HttpConfigService
      ]
    });
    servicio = TestBed.get(HttpConfigService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch data as an Observable `, async(inject([HttpTestingController, HttpConfigService],
    (httpClient: HttpTestingController, servicio: HttpConfigService) => {
      servicio.getListOfAlbums()
        .subscribe((data: any) => {
          expect(data.length).toBe(6);
        });

      let req = httpMock.expectOne({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/albums' });
      expect(req.request.method).toBe("GET");

      req.flush(mockAlbumIten);
      httpMock.verify();

    })));
});



describe('HttpConfigService getListOfAlbumsById(id)', () => {
  let servicio: HttpConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], providers: [
        HttpConfigService
      ]
    });
    servicio = TestBed.get(HttpConfigService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch data as an Observable BY ID`, async(inject([HttpTestingController, HttpConfigService],
    (httpClient: HttpTestingController, servicio: HttpConfigService) => {
      servicio.getListOfAlbumsById(3)
        .subscribe((data: any) => {
          console.log(data[2].title)
          expect(data[2].title).toBe('omnis laborum odio');
        });
      let req = httpMock.expectOne({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/albums/3' });
      expect(req.request.method).toBe("GET");
      req.flush(mockAlbumIten);
      httpMock.verify();
    })));
});
