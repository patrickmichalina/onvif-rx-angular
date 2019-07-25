import { InjectionToken } from '@angular/core';
import { ITransport } from 'onvif-rx/config/interfaces';

export const TRANSPORT = new InjectionToken<ITransport>('onvif.rx.transport');
