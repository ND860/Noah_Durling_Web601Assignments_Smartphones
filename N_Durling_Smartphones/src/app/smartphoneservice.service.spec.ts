import { TestBed } from '@angular/core/testing';

import { SmartphoneserviceService } from './smartphoneservice.service';

describe('SmartphoneserviceService', () => {
  let service: SmartphoneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartphoneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
