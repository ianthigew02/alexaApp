import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  beforeEach(() => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      JSON.stringify([
        {
          description: 'Books',
        },
      ])
    );

    spyOn(window.localStorage, 'setItem').and.returnValue();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the Data List', () => {
    service.setDataList('key', [
      {
        description: 'Books',
      },
    ]);

    expect(service.getDataList('key')).toEqual([
      {
        description: 'Books',
      },
    ]);

    expect(window.localStorage.getItem).toHaveBeenCalledWith('key');
  });

  it('should set the Data List', () => {
    service.setDataList('key', [
      {
        description: 'Books',
      },
    ]);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'key',
      JSON.stringify([
        {
          description: 'Books',
        },
      ])
    );
  });
});
