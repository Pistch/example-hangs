new Worker(new URL(
    './something.worker.ts',
    // @ts-ignore
    import.meta.url,
));