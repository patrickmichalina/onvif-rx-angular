import { TestBed } from '@angular/core/testing';

import { OnvifRxAngularService } from './onvif-rx-angular.service';

describe('OnvifRxAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnvifRxAngularService = TestBed.get(OnvifRxAngularService);
    expect(service).toBeTruthy();
  });
});
