# onvif-rx-angular
A thin wrapper around onvif-rx to communicate with ONVIF devices and cameras in Angular applications.

### Installation

`npm i onvif-rx-angular`

```js
import { NgModule } from '@angular/core';
import { ONVIFModule } from 'onvif-rx-angular';

@NgModule({
  ...
  imports: [
    ...,
    ONVIFModule,
    ...
  ],
  ...
})
export class AppModule { }
```

You will also need to somehow expose a global object for the Buffer polyfill. You can do this by adding
`(window as any).global = window;` to your `polyfills.ts` file.


### Example Usage

```js
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

  getSomeInfo = () => 
    this.device.api.Media
    .GetServiceCapabilities()
    .toPromise()
    .then(response => {
      response.match({
        fail: console.log,
        ok: d => console.log(d.json)
      });
    })
}
```