/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CircuitService } from './circuit.service';

describe('Service: Circuit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircuitService]
    });
  });

  it('should ...', inject([CircuitService], (service: CircuitService) => {
    expect(service).toBeTruthy();
  }));
});
