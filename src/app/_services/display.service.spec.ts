/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisplayService } from './display.service';

describe('Service: Display', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayService]
    });
  });

  it('should ...', inject([DisplayService], (service: DisplayService) => {
    expect(service).toBeTruthy();
  }));
});
