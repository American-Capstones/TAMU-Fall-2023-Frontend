import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const tamuFall2023FrontendPlugin = createPlugin({
  id: 'tamu-fall-2023-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const TamuFall2023FrontendPage = tamuFall2023FrontendPlugin.provide(
  createRoutableExtension({
    name: 'TamuFall2023FrontendPage',
    component: () => import('./components/KanbanComponent').then((m) => m.KanbanComponent),
    mountPoint: rootRouteRef,
  }),
);
