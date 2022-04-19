import { setupWorker, rest } from 'msw';
import { createMockHandlers } from './handlers';

const worker = setupWorker(...createMockHandlers(rest));

// Config to fix the bug: "Failed to register a Service Worker for scope ('https://miquelbo.github.io/') 
// with script ('https://miquelbo.github.io/mockServiceWorker.js'): Service Worker script does not exist at the given path."
// More info: https://githubhot.com/repo/mswjs/msw/issues/737
worker.start({
  serviceWorker: {
    url: '/crudAngularExample/mockServiceWorker.js'
  }
});

export { worker, rest };
