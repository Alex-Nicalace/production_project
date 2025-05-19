import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-expect-error на данный момент это временно для демонстрации ассинхронности
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    )
);
