import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { worker } from './mocks/browser';

if (environment.production) {
  enableProdMode();
}

// Per produccio, sesta executant igualment mswjs, pero ho fa desde dins environment.prod.ts
// A desa ho faig aqui i no dins environment.ts, per evitar el error "Cannot access 'environment' before initialization" 
// (s'intentava executar mswjs desde enviroment.ts, on teniem la definicio duna constant (URL_USERS), que era usada pel propi mswjs)
if (!environment.production) {
  worker.start();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
