import { Worker } from '@gravity-ui/app-builder/worker';

new Worker(new URL(
    './something.worker.ts',
    // @ts-ignore
    import.meta.url,
));