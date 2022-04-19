import { setupWorker, rest } from 'msw';
import { createMockHandlers } from './handlers';

const worker = setupWorker(...createMockHandlers(rest));

worker.start();

export { worker, rest };
