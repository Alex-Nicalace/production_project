import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-expect-error на данный момент это временно для демонстрации ассинхронности
      setTimeout(() => resolve(import('./MainPage')), 1500)
    )
);
