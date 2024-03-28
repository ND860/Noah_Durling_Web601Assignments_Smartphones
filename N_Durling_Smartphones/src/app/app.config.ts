import { ApplicationConfig, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryDataService } from './memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(),  
  importProvidersFrom([
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      })
  ]), provideAnimationsAsync('noop')]
};
