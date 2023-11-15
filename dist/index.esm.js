import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "tamu-fall-2023-frontend"
});

const tamuFall2023FrontendPlugin = createPlugin({
  id: "tamu-fall-2023-frontend",
  routes: {
    root: rootRouteRef
  }
});
const TamuFall2023FrontendPage = tamuFall2023FrontendPlugin.provide(
  createRoutableExtension({
    name: "TamuFall2023FrontendPage",
    component: () => import('./esm/index-0a0714b3.esm.js').then((m) => m.KanbanComponent),
    mountPoint: rootRouteRef
  })
);

export { TamuFall2023FrontendPage, tamuFall2023FrontendPlugin };
//# sourceMappingURL=index.esm.js.map
