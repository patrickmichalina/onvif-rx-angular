import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { ONVIFService } from './onvif-rx-angular.service';
import { TRANSPORT } from './onvif-rx-angular.tokens';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ITransportPayoad } from 'onvif-rx/config/interfaces';

export function transport(http: HttpClient) {
  const lambda = (body: string) => (uri: string) =>
    http.post(uri, body, {
      observe: 'response',
      responseType: 'text',
      headers: { 'Content-Type': 'application/soap+xml; charset=utf-8;' }
    }).pipe(
      map<HttpResponse<string>, ITransportPayoad>(r => ({ body: r.body, status: r.status, statusMessage: r.statusText })),
      catchError(e => of<ITransportPayoad>({ body: e.error, status: e.status, statusMessage: e.statusText })));
  return lambda;
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ONVIFService,
    {
      provide: TRANSPORT,
      useFactory: transport,
      deps: [HttpClient]
    }
  ]
})
export class ONVIFModule { }
