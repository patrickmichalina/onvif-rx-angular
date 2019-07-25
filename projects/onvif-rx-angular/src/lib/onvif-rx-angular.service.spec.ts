import { TestBed } from '@angular/core/testing';
import { ONVIFService } from './onvif-rx-angular.service';
import { ONVIFModule } from './onvif-rx-angular.module';

describe(ONVIFService.name, () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ONVIFModule]
  }));

  it('should be created', () => {
    const service: ONVIFService = TestBed.get(ONVIFService);
    expect(service).toBeTruthy();
  });
});
