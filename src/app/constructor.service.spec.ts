/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConstructorService } from './constructor.service';

describe('Service: Constructor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructorService]
    });
  });

  it('should ...', inject([ConstructorService], (service: ConstructorService) => {
    expect(service).toBeTruthy();
  }));
});
