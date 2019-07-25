import { Injectable, Inject } from '@angular/core';
import { TRANSPORT } from './onvif-rx-angular.tokens';
import { DEFAULT_BROWSER_ENV, createManagedDevice, IDeviceInitConfig } from 'onvif-rx';

@Injectable({
  providedIn: 'root'
})
export class ONVIFService {
  constructor(@Inject(TRANSPORT) private transport: any) { }

  private readonly runSettings = {
    ...DEFAULT_BROWSER_ENV,
    transport: this.transport
  };

  public readonly createManagedDevice =
    (config: IDeviceInitConfig) =>
      createManagedDevice(config)
        .run(this.runSettings)
}
