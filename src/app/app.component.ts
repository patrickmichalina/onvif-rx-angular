import { Component } from '@angular/core';
import { ONVIFService } from 'onvif-rx-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private onvif: ONVIFService) { }

  device = this.onvif.createManagedDevice({
    deviceUrl: 'http://192.168.1.142:80/onvif/device_service',
    password: 'admin',
    username: '123456'
  });

  getSomeInfo = () => this.device.api.Media
    .GetServiceCapabilities()
    .toPromise()
    .then(response => {
      response.match({
        fail: console.log,
        ok: d => console.log(d.json)
      });
    })
}
